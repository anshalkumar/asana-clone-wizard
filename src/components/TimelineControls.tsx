import { Plus, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Filter, ArrowUpDown, Settings } from "lucide-react";
import { Button } from "./ui/button";

export const TimelineControls = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-sm">
          <Plus className="w-4 h-4 mr-1" />
          Add task
        </Button>
        
        <div className="flex items-center gap-1 ml-4">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-sm min-w-[80px]">
            Today
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 mr-2">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground">Weeks</span>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
        
        <Button variant="ghost" size="sm" className="text-sm">
          <Filter className="w-4 h-4 mr-1" />
          Filter
        </Button>
        <Button variant="ghost" size="sm" className="text-sm">
          <ArrowUpDown className="w-4 h-4 mr-1" />
          Sort
        </Button>
        <Button variant="ghost" size="sm" className="text-sm">
          <Settings className="w-4 h-4 mr-1" />
          Options
        </Button>
      </div>
    </div>
  );
};
