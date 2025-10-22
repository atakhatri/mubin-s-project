// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        // Basic validation (add more robust validation as needed)
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newSubmission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                service,
                message,
            },
        });

        return NextResponse.json({
            message: 'Submission received!',
            submissionId: newSubmission.id
        }, { status: 201 });

    } catch (error) {
        console.error('Error saving contact submission:', error);
        // Determine if it's a unique constraint error (e.g., duplicate email)
        if (error instanceof Error && (error as any).code === 'P2002') { // Prisma unique constraint error code
            return NextResponse.json({ error: 'Email already submitted.' }, { status: 409 }); // 409 Conflict
        }
        return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
    } finally {
        await prisma.$disconnect(); // Disconnect Prisma client
    }
}