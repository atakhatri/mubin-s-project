const Bubbles = () => {
  return (
    <div className="bubbles" aria-hidden="true">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="bubble" />
      ))}
    </div>
  );
};

export default Bubbles;