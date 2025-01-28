export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`rounded-lg shadow-md p-4 ${className}`}>{children}</div>;
  }