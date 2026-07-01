import { Menu } from "lucide-react";

const AdminHeader = ({ setSidebarOpen }) => {
  return (
    <header className="h-20 bg-[#18181b] border-b border-zinc-800 flex items-center justify-between px-4 md:px-6">

      {/* Left */}
      <div className="flex items-center gap-3">

        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden"
        >
          <Menu />
        </button>

        <h1 className="text-xl font-bold">
          WELCOME 
        </h1>

      </div>

      {/* Right (empty for now) */}
      <div />

    </header>
  );
};

export default AdminHeader;