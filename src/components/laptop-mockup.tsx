"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MousePointer2, 
  Layout, 
  Type, 
  Square, 
  Circle, 
  PenTool, 
  MessageSquare,
  Share2,
  Play,
  Menu,
  Search,
  ChevronDown,
  Plus,
  Minus,
  Maximize,
  Image as ImageIcon,
  Settings
} from "lucide-react";
import { motion } from "framer-motion";

export function LaptopMockup() {
  return (
    <motion.div 
      className="relative mx-auto mt-20 w-full max-w-5xl px-4"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Laptop Frame */}
      <div className="relative z-10 mx-auto aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-t-2xl border-[12px] border-b-0 border-gray-800 bg-gray-900 shadow-2xl md:rounded-t-3xl md:border-[16px]">
        
        {/* Screen Content - Generic Visual Editor */}
        <div className="flex h-full w-full flex-col bg-white text-gray-900">
          
          {/* Top Bar */}
          <div className="flex h-12 items-center justify-between border-b px-4 bg-gray-50">
            <div className="flex items-center gap-4">
               <div className="h-6 w-6 rounded bg-green-500"></div>
               <div className="flex gap-1">
                  <div className="h-2 w-16 rounded bg-gray-300"></div>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="https://i.pravatar.cc/100?img=12" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                   <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="https://i.pravatar.cc/100?img=15" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
               </div>
               <div className="h-8 w-20 rounded bg-black"></div>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Left Sidebar - Components */}
            <div className="hidden w-16 flex-col items-center border-r bg-gray-50 py-4 sm:flex gap-6">
               <Layout className="h-5 w-5 text-gray-400" />
               <Square className="h-5 w-5 text-gray-400" />
               <Type className="h-5 w-5 text-gray-400" />
               <ImageIcon className="h-5 w-5 text-gray-400" />
               <Settings className="h-5 w-5 text-gray-400 mt-auto" />
            </div>

            {/* Canvas */}
            <div className="relative flex-1 bg-gray-100 p-8 overflow-hidden flex items-center justify-center">
               {/* Canvas Content - Website Preview */}
               <div className="h-[90%] w-[90%] rounded-lg bg-white shadow-lg overflow-hidden border border-gray-200 relative">
                  {/* Website Header */}
                  <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
                     <div className="h-4 w-24 rounded bg-gray-900"></div>
                     <div className="flex gap-6">
                        <div className="h-2 w-16 rounded bg-gray-200"></div>
                        <div className="h-2 w-16 rounded bg-gray-200"></div>
                        <div className="h-2 w-16 rounded bg-gray-200"></div>
                     </div>
                  </div>
                  {/* Website Hero */}
                  <div className="flex flex-col items-center justify-center pt-16 px-12 text-center">
                     <div className="mb-6 h-12 w-3/4 rounded bg-gray-900"></div>
                     <div className="mb-8 h-4 w-1/2 rounded bg-gray-300"></div>
                     <div className="flex gap-4">
                        <div className="h-10 w-32 rounded bg-black"></div>
                        <div className="h-10 w-32 rounded border border-gray-300"></div>
                     </div>
                  </div>
                  
                  {/* Selection Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                     <div className="absolute top-[30%] left-[20%] right-[20%] h-48 border-2 border-blue-500 rounded">
                        <div className="absolute -top-3 left-0 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-t">Hero Section</div>
                        <div className="absolute -left-1 -top-1 h-2 w-2 bg-white border border-blue-500"></div>
                        <div className="absolute -right-1 -top-1 h-2 w-2 bg-white border border-blue-500"></div>
                        <div className="absolute -left-1 -bottom-1 h-2 w-2 bg-white border border-blue-500"></div>
                        <div className="absolute -right-1 -bottom-1 h-2 w-2 bg-white border border-blue-500"></div>
                     </div>
                  </div>

                   {/* Cursor */}
                   <div className="absolute top-[60%] right-[30%] z-20">
                      <MousePointer2 className="h-6 w-6 fill-black text-white drop-shadow-md" />
                   </div>
               </div>
            </div>

            {/* Right Sidebar - Properties */}
            <div className="hidden w-64 flex-col border-l bg-white sm:flex">
               <div className="border-b px-4 py-3 text-xs font-medium text-gray-900">
                  Properties
               </div>
               <div className="p-4 space-y-6">
                  <div className="space-y-2">
                     <div className="h-2 w-12 rounded bg-gray-200"></div>
                     <div className="flex gap-2">
                        <div className="h-8 flex-1 rounded bg-gray-100 border border-gray-200"></div>
                        <div className="h-8 flex-1 rounded bg-gray-100 border border-gray-200"></div>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <div className="h-2 w-16 rounded bg-gray-200"></div>
                     <div className="h-8 w-full rounded bg-gray-100 border border-gray-200"></div>
                  </div>
                   <div className="space-y-2">
                     <div className="h-2 w-10 rounded bg-gray-200"></div>
                     <div className="grid grid-cols-2 gap-2">
                        <div className="h-8 rounded bg-gray-100 border border-gray-200"></div>
                        <div className="h-8 rounded bg-gray-100 border border-gray-200"></div>
                        <div className="h-8 rounded bg-gray-100 border border-gray-200"></div>
                        <div className="h-8 rounded bg-gray-100 border border-gray-200"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Laptop Bottom/Keyboard Area */}
      <div className="relative z-0 mx-auto -mt-2 h-4 w-full max-w-[56rem] rounded-b-xl bg-gray-800 shadow-xl md:h-6">
         <div className="absolute left-1/2 top-0 h-2 w-32 -translate-x-1/2 rounded-b-lg bg-gray-700"></div>
      </div>
      
      {/* Glow Effect & Haze */}
      <div className="absolute -inset-4 -z-10 rounded-[3.5rem] bg-gradient-to-b from-green-500/20 to-blue-500/0 blur-3xl"></div>
      
      {/* Animated Particles/Haze - Colorful Blobs */}
      <div className="absolute -top-20 -left-20 -z-20 h-72 w-72 animate-pulse rounded-full bg-purple-500/30 blur-[80px]"></div>
      <div className="absolute -bottom-20 -right-20 -z-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/30 blur-[80px] delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -z-20 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-green-500/20 blur-[100px] delay-500"></div>
      <div className="absolute top-0 right-0 -z-20 h-64 w-64 animate-pulse rounded-full bg-yellow-500/20 blur-[90px] delay-700"></div>

      {/* Drop Shadow */}
      <div className="absolute -bottom-12 left-1/2 h-12 w-[90%] -translate-x-1/2 rounded-[100%] bg-black/40 blur-xl"></div>
    </motion.div>
  );
}
