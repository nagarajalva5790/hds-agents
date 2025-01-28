export function Button({ onClick, children, className }: { onClick: () => void; children: React.ReactNode; className?: string }) {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition ${className}`}
      >
        {children}
      </button>
    );
  }