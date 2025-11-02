import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { ProjectHeader } from "@/components/ProjectHeader";
import { TimelineControls } from "@/components/TimelineControls";
import { Timeline } from "@/components/Timeline";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <TopBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 mt-14 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        
        <main
          className={`flex-1 flex flex-col transition-all duration-300 ${
            sidebarOpen ? "ml-[230px]" : "ml-0"
          }`}
        >
          <ProjectHeader />
          <TimelineControls />
          <Timeline />
        </main>
      </div>
    </div>
  );
};

export default Index;
