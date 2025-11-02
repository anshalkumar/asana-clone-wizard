import { Home, Inbox, CheckSquare, Plus, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-[hsl(var(--sidebar-bg))] border-r border-border transition-all duration-300 ${
        isOpen ? "w-[230px]" : "w-0"
      } overflow-hidden z-20`}
    >
      <div className="flex flex-col h-full p-4">
        <nav className="flex-1 space-y-1">
          <SidebarLink icon={Home} label="Home" />
          <SidebarLink icon={CheckSquare} label="My tasks" />
          <SidebarLink icon={Inbox} label="Inbox" />
          
          <div className="pt-6">
            <SidebarSection title="Insights" icon={Plus}>
              <SidebarLink label="Reporting" nested />
              <SidebarLink label="Portfolios" nested />
              <SidebarLink label="Goals" nested />
            </SidebarSection>
          </div>
          
          <div className="pt-4">
            <SidebarSection title="Projects" icon={Plus}>
              <SidebarLink label="x zx" nested active />
            </SidebarSection>
          </div>
          
          <div className="pt-4">
            <SidebarSection title="Team" icon={Plus}>
              <SidebarLink label="My workspace" nested />
            </SidebarSection>
          </div>
        </nav>
      </div>
    </aside>
  );
};

const SidebarLink = ({
  icon: Icon,
  label,
  nested,
  active,
}: {
  icon?: any;
  label: string;
  nested?: boolean;
  active?: boolean;
}) => {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-1.5 text-sm rounded transition-colors ${
        nested ? "pl-6" : ""
      } ${
        active
          ? "bg-secondary text-foreground font-medium"
          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{label}</span>
    </button>
  );
};

const SidebarSection = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <button className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
        <span>{title}</span>
        <Icon className="w-3.5 h-3.5" />
      </button>
      <div className="mt-1 space-y-1">{children}</div>
    </div>
  );
};
