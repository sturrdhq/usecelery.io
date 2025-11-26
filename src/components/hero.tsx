"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thanks");
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as const,
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as const,
    },
  };

  const text = "Own your code. Design Visually. Deploy Anywhere.";
  const words = text.split(" ");

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-20 pb-10 text-center md:pt-32">
      <div className="mb-8 flex items-center gap-3">
        <Icons.logo className="h-12 w-12" />
        <span className="font-serif text-3xl font-medium tracking-tight text-primary">Celery</span>
      </div>
      
      <motion.h1 
        className="mb-6 max-w-5xl font-serif text-5xl font-normal leading-tight tracking-tight text-primary md:text-7xl lg:text-8xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="inline-block mr-[0.2em] last:mr-0">
            {word === "Visually." || word === "Anywhere." ? (
               <>
                 {word} <br className="hidden md:block" />
               </>
            ) : (
               word
            )}
          </motion.span>
        ))}
      </motion.h1>

      <p className="mb-10 max-w-xl text-lg text-muted-foreground md:text-xl">
        We&apos;re getting close. Sign up to get early access to Celery and start
        building your viral waitlist.
      </p>

      <form onSubmit={handleSubmit} className="mb-10 flex w-full max-w-sm flex-col items-center gap-2 sm:flex-row sm:gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          className="h-12 rounded-full bg-muted/50 px-6 text-base"
          required
        />
        <Button size="lg" className="h-12 rounded-full px-8 text-base">
          Join waitlist
        </Button>
      </form>

      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <Avatar key={i} className="border-2 border-background">
              <AvatarImage src={`https://i.pravatar.cc/100?img=${i + 10}`} />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Join +5,000 others on the waitlist
        </div>
      </div>
    </section>
  );
}
