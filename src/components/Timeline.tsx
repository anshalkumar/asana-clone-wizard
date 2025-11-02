import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface Task {
  id: string;
  title: string;
  color: "blue" | "amber" | "pink" | "green";
  assignee: string;
  startWeek: number;
  duration: number;
}

const initialTasks: Task[] = [
  { id: "1", title: "c.", color: "blue", assignee: "ww", startWeek: 3, duration: 1 },
  { id: "2", title: "z.", color: "amber", assignee: "ww", startWeek: 4, duration: 1 },
  { id: "3", title: "zdv", color: "pink", assignee: "", startWeek: 4, duration: 1 },
];

const months = [
  { name: "October", weeks: [{ label: "6" }, { label: "W44", range: "27 Oct - 2" }] },
  {
    name: "November",
    weeks: [
      { label: "W45", range: "3 - 9" },
      { label: "W46", range: "10 - 16" },
      { label: "W47", range: "17 - 23" },
      { label: "W48", range: "24 - 30" },
    ],
  },
  { name: "December", weeks: [{ label: "W49", range: "1 - 7" }] },
];

const sections = [
  { id: "todo", title: "To do", tasks: initialTasks },
  { id: "doing", title: "Doing", tasks: [] },
  { id: "done", title: "done", tasks: [] },
];

export const Timeline = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    todo: true,
    doing: true,
    done: true,
  });

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalWeeks = months.reduce((sum, month) => sum + month.weeks.length, 0);

  return (
    <div className="flex-1 overflow-auto">
      {/* Timeline Header */}
      <div className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="flex">
          <div className="w-[200px] flex-shrink-0 border-r border-border" />
          <div className="flex-1 flex">
            {months.map((month, monthIdx) => (
              <div
                key={month.name}
                className="border-r border-border"
                style={{ width: `${(month.weeks.length / totalWeeks) * 100}%` }}
              >
                <div className="text-sm font-medium text-muted-foreground px-4 py-2 border-b border-border">
                  {month.name}
                </div>
                <div className="flex">
                  {month.weeks.map((week, weekIdx) => (
                    <div
                      key={`${monthIdx}-${weekIdx}`}
                      className="flex-1 border-r border-[hsl(var(--grid-line))] last:border-r-0"
                    >
                      <div className="text-xs text-muted-foreground px-2 py-2 text-center">
                        <div>{week.label}</div>
                        {week.range && <div className="text-[10px] mt-0.5">{week.range}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Body */}
      <div className="relative">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-border">
            <div className="flex items-center h-10 border-b border-border bg-card hover:bg-muted/30 transition-colors">
              <div className="w-[200px] flex-shrink-0 border-r border-border flex items-center px-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-5 h-5 -ml-1 mr-1"
                  onClick={() => toggleSection(section.id)}
                >
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>
                <span className="text-sm font-medium">{section.title}</span>
              </div>
              <div className="flex-1 relative h-full">
                {expandedSections[section.id] && section.tasks.length > 0 && (
                  <div className="absolute inset-0 flex items-center px-2">
                    {section.tasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        totalWeeks={totalWeeks}
                      />
                    ))}
                  </div>
                )}
                <div className="absolute inset-0 flex">
                  {Array.from({ length: totalWeeks }).map((_, idx) => (
                    <div
                      key={idx}
                      className="flex-1 border-r border-[hsl(var(--grid-line))] last:border-r-0 hover:bg-muted/20 transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>
            {expandedSections[section.id] && section.tasks.length === 0 && (
              <div className="flex items-center h-12 text-sm text-muted-foreground px-4">
                Click anywhere to create a task
              </div>
            )}
          </div>
        ))}
        
        <Button
          variant="ghost"
          size="sm"
          className="ml-3 mt-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add section
        </Button>
      </div>
    </div>
  );
};

const TaskCard = ({ task, totalWeeks }: { task: Task; totalWeeks: number }) => {
  const colorClasses = {
    blue: "bg-[hsl(var(--task-blue))] text-blue-950",
    amber: "bg-[hsl(var(--task-amber))] text-amber-950",
    pink: "bg-[hsl(var(--task-pink))] text-purple-950",
    green: "bg-[hsl(var(--task-green))] text-green-950",
  };

  const left = (task.startWeek / totalWeeks) * 100;
  const width = (task.duration / totalWeeks) * 100;

  return (
    <div
      className={`absolute h-7 rounded px-2 flex items-center gap-1.5 cursor-pointer hover:brightness-95 transition-all shadow-sm ${
        colorClasses[task.color]
      }`}
      style={{
        left: `${left}%`,
        width: `${width}%`,
        minWidth: "60px",
      }}
    >
      {task.assignee && (
        <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-[9px] font-semibold">
          {task.assignee}
        </div>
      )}
      <span className="text-xs font-medium truncate">{task.title}</span>
    </div>
  );
};
