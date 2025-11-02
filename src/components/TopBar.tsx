import { Menu, Search, HelpCircle, Star, Grid3x3 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface TopBarProps {
  onToggleSidebar: () => void;
}

export const TopBar = ({ onToggleSidebar }: TopBarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-card border-b border-border z-30 flex items-center px-4 gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleSidebar}
        className="text-muted-foreground hover:text-foreground"
      >
        <Menu className="w-5 h-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Create
      </Button>
      
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-9 bg-input border-0 h-9"
        />
      </div>
      
      <div className="flex items-center gap-2 ml-auto">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <HelpCircle className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Grid3x3 className="w-5 h-5" />
        </Button>
        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-semibold">
          WW
        </div>
      </div>
    </header>
  );
};
