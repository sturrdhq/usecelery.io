import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, MoreHorizontal, Search, User } from "lucide-react";

// I'll need a Badge component, let me create a simple one inline or add it later.
// For now I'll use a simple span with classes.

export function PhoneMockup() {
  return (
    <div className="relative mx-auto mt-20 max-w-[300px] md:max-w-[350px]">
      {/* Phone Frame */}
      <div className="relative z-10 overflow-hidden rounded-[3rem] border-[8px] border-white bg-white shadow-2xl">
        {/* Notch/Dynamic Island */}
        <div className="absolute left-1/2 top-4 h-7 w-28 -translate-x-1/2 rounded-full bg-black"></div>

        {/* Screen Content */}
        <div className="bg-[#F6F6F6] pb-10 pt-14">
            {/* Status Bar */}
            <div className="flex justify-between px-6 pb-4 text-xs font-medium text-gray-900">
                <span>9:41</span>
                <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                </div>
            </div>

          {/* Header */}
          <div className="px-6 pb-6">
            <h2 className="text-2xl font-semibold text-gray-900">My tasks</h2>
          </div>

          {/* Top Priority */}
          <div className="mb-6 px-4">
            <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
              Top Priority
            </div>
            <div className="space-y-3">
              <TaskCard
                title="Final Design Review"
                subtitle="Produx App"
                priority="High Priority"
                date="Feb 20"
                completed
              />
              <TaskCard
                title="Landing page"
                subtitle="Temlis"
                priority="High Priority"
                date="Feb 20"
                completed={false}
              />
            </div>
          </div>

          {/* Due Today */}
          <div className="px-4">
            <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
              Due Today
            </div>
            <div className="space-y-3">
              <TaskCard
                title="Wireframe Homepage"
                subtitle="Produx App"
                priority="Normal"
                date="Feb 20"
                completed={false}
              />
               <TaskCard
                title="User Testing"
                subtitle="Produx App"
                priority="Low"
                date="Feb 20"
                completed={false}
              />
               <TaskCard
                title="Final Design Review"
                subtitle="Produx App"
                priority="Normal"
                date="Feb 20"
                completed={false}
              />
            </div>
          </div>
          
          {/* Bottom Nav */}
          <div className="absolute bottom-4 left-4 right-4 h-16 rounded-full bg-[#2C2C2C] px-6 flex items-center justify-between text-gray-400">
             <div className="flex flex-col items-center gap-1">
                <div className="h-5 w-5 rounded-sm bg-gray-600"></div>
             </div>
             <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
                <CheckCircle2 className="h-4 w-4 fill-black text-white" />
                <span>My task</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                 <Search className="h-5 w-5" />
             </div>
             <div className="flex flex-col items-center gap-1">
                 <User className="h-5 w-5" />
             </div>
          </div>
        </div>
      </div>
      
      {/* Hand/Background Effect - Simplified for now, maybe use an image or CSS gradient */}
      <div className="absolute -inset-4 -z-10 rounded-[3.5rem] bg-gradient-to-b from-blue-100/50 to-blue-50/0 blur-2xl"></div>
    </div>
  );
}

function TaskCard({
  title,
  subtitle,
  priority,
  date,
  completed,
}: {
  title: string;
  subtitle: string;
  priority: string;
  date: string;
  completed: boolean;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
      <div className="mt-1">
        {completed ? (
          <CheckCircle2 className="h-5 w-5 fill-green-500 text-white" />
        ) : (
          <Circle className="h-5 w-5 text-gray-300" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <h3 className={`text-sm font-medium ${completed ? "text-gray-500 line-through" : "text-gray-900"}`}>
            {title}
          </h3>
          <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{date}</span>
        </div>
        <p className="text-xs text-gray-500">{subtitle}</p>
        <div className="mt-2 flex items-center gap-2">
            <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium ring-1 ring-inset ${
                priority === "High Priority" ? "bg-red-50 text-red-700 ring-red-600/10" : 
                priority === "Normal" ? "bg-gray-50 text-gray-600 ring-gray-500/10" :
                "bg-blue-50 text-blue-700 ring-blue-700/10"
            }`}>
                <span className={`mr-1 h-1.5 w-1.5 rounded-full ${
                     priority === "High Priority" ? "bg-red-600" : 
                     priority === "Normal" ? "bg-gray-600" :
                     "bg-blue-600"
                }`}></span>
                {priority}
            </span>
        </div>
      </div>
    </div>
  );
}
