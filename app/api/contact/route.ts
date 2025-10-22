import { NextResponse } from 'next/server';
// Import the Prisma Client singleton instance
import prisma from '@/lib/prisma'; // Adjust path if your lib folder is elsewhere
import { Prisma } from '@prisma/client'; // Import Prisma namespace for error types

export async function POST(request: Request) {
    console.log("Contact API route hit."); // Log when the route is accessed

    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        console.log("Received data:", { name, email, service: service || 'Not provided', message }); // Log received data

        // Basic validation (can be enhanced with libraries like Zod)
        if (!name || !email || !message) {
            console.warn("Validation failed: Missing required fields.");
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            console.warn("Validation failed: Invalid email format.");
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }


        console.log("Attempting to save submission to database...");
        const newSubmission = await prisma.contactSubmission.create({
            data: {
                name: name.trim(),
                email: email.trim(),
                service: service || null, // Handle empty service string explicitly
                message: message.trim(),
            },
        });

        console.log("Submission successful:", newSubmission.id);
        return NextResponse.json({
            message: 'Submission received successfully!',
            submissionId: newSubmission.id
        }, { status: 201 }); // 201 Created status

    } catch (error) {
        console.error('Error processing contact submission:', error); // Log the full error

        // Handle specific Prisma errors
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Unique constraint violation (e.g., duplicate email)
            if (error.code === 'P2002') {
                // Find which field caused the violation
                const target = (error.meta?.target as string[])?.join(', ') || 'field';
                console.warn(`Prisma Error P2002: Unique constraint failed on ${target}.`);
                // Be more specific if possible, assuming email is the likely unique field here
                if (target.includes('email')) {
                    return NextResponse.json({ error: 'This email address has already been submitted.' }, { status: 409 }); // 409 Conflict
                }
                return NextResponse.json({ error: `This ${target} is already in use.` }, { status: 409 });
            }
            // Add other Prisma error codes here if needed
            // e.g., P2025: Record not found
        }

        // Handle potential database connection errors (example, more specific checks might be needed depending on driver)
        if (error instanceof Prisma.PrismaClientInitializationError) {
            console.error("Database connection error:", error.message);
            return NextResponse.json({ error: 'Failed to connect to the database. Please try again later.' }, { status: 503 }); // 503 Service Unavailable
        }


        // Generic server error for anything else
        return NextResponse.json({ error: 'An unexpected error occurred. Failed to save submission.' }, { status: 500 });

    }
    // No need for finally { await prisma.$disconnect(); } when using a singleton instance
    // The connection is managed globally.
}

// Optional: Add a GET handler for testing or other purposes
export async function GET() {
    return NextResponse.json({ message: 'Contact API is running. Use POST to submit.' });
}
