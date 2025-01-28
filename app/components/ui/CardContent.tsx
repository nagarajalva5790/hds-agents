export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`text-sm ${className}`}>{children}</div>;
  }
  