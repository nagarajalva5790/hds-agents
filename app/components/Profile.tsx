type ProfileProps = {
    name: string;
    email: string;
    avatar?: string;
  };
  
  export function Profile({ name, email, avatar }: ProfileProps) {
    return (
      <div className="p-4 bg-gray-100 border-b">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            {avatar ? <img src={avatar} alt="Avatar" className="w-full h-full rounded-full" /> : name[0]}
          </div>
          <div>
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-sm text-gray-600">{email}</div>
          </div>
        </div>
      </div>
    );
  }