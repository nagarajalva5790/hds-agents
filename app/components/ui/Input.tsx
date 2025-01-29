export function Input({ value, onChange, onKeyDown, placeholder, className }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; placeholder?: string; className?: string }) {
  return (
    <input
    type="text"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    className={`border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
  }