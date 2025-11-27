'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import posthog from 'posthog-js';
import { useWaitlist } from '@/hooks/use-waitlist';

export function Hero() {
  const router = useRouter();
  const { email, onChangeEmail, isLoading, subscribe } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    posthog.capture('new waitlist signup', { email });

    const res = await subscribe();

    if (!res.error) {
      router.push('/thanks');
    }
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
        type: 'spring',
        damping: 12,
        stiffness: 100,
      } as const,
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      } as const,
    },
  };

  const text = 'Own your code. Design Visually. Deploy Anywhere.';
  const words = text.split(' ');

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-8 pb-10 text-center md:pt-32">
      <div className="flex flex-1 align-center justify-between md:justify-center w-full">
        <div className="mb-8 flex items-center gap-1">
          <Icons.logo className="h-10 w-10 md:h-20 md:w-20" />
          <span className="-ml-2 text-[20px] font-medium tracking-tight text-primary md:hidden">Celery</span>
        </div>
        <Button loading={isLoading} size="sm" className="rounded-full md:hidden" onClick={() => inputRef.current?.focus()}>
          Join Waitlist
        </Button>
      </div>

      <motion.h1
        className="mb-6 max-w-5xl font-serif text-5xl font-normal leading-tight tracking-tight text-primary md:text-7xl lg:text-8xl mt-8 md:mt-0"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="inline-block mr-[0.2em] last:mr-0">
            {word === 'Visually.' || word === 'Anywhere.'
              ? (
                  <>
                    {word}
                    {' '}
                    <br className="hidden md:block" />
                  </>
                )
              : (
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
          value={email}
          onChange={onChangeEmail}
          ref={inputRef}
          placeholder="Your email address"
          className="h-12 rounded-full bg-muted/50 px-6 text-base"
          required
        />
        <Button size="lg" className="h-12 rounded-full px-8 text-base w-full md:w-auto">
          Join waitlist
        </Button>
      </form>

      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {[1, 2, 3].map(i => (
            <Avatar key={i} className="border-2 border-background">
              <AvatarImage src={`https://i.pravatar.cc/100?img=${i + 10}`} />
              <AvatarFallback>
                U
                {i}
              </AvatarFallback>
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
