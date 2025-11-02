import { List, LayoutDashboard, Calendar, Workflow, MessageSquare, FileText, Plus, Star } from "lucide-react";
import { Button } from "./ui/button";

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "list", label: "List", icon: List },
  { id: "board", label: "Board", icon: LayoutDashboard },
  { id: "timeline", label: "Timeline", icon: Calendar },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "workflow", label: "Workflow", icon: Workflow },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "files", label: "Files", icon: FileText },
];

export const ProjectHeader = () => {
  return (
    <div className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <List className="w-5 h-5 text-muted-foreground" />
          <h1 className="text-lg font-semibold">X ZX</h1>
          <Button variant="ghost" size="icon" className="w-6 h-6 text-muted-foreground hover:text-foreground">
            <Star className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center -space-x-2">
            <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-xs font-semibold border-2 border-card">
              WW
            </div>
          </div>
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
            Share
          </Button>
          <Button variant="outline" size="sm">
            Customize
          </Button>
        </div>
      </div>
      
      <nav className="flex items-center gap-1 px-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors relative ${
              tab.id === "timeline"
                ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
        <Button variant="ghost" size="icon" className="ml-2 w-8 h-8">
          <Plus className="w-4 h-4" />
        </Button>
      </nav>
    </div>
  );
};
