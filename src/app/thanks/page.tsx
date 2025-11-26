'use client';

import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { Copy, Twitter, Facebook, MessageCircle, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Thanks() {
  const [copied, setCopied] = useState(false);
  const referralUrl = 'usecelery.io';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = 'I just joined the waitlist for Celery! Check it out:';
  const shareUrl = 'https://usecelery.io';

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-[#F9F9F9] pt-20">
      <div className="flex w-full max-w-2xl flex-col items-center px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <Icons.logo className="h-16 w-16" />
        </div>

        {/* Headline */}
        <h1 className="mb-4 font-serif text-4xl font-normal text-gray-900 md:text-5xl">
          You&apos;re on the waitlist
        </h1>

        {/* Subtext */}
        <p className="mb-10 max-w-md text-gray-600">
          You&apos;ve successfully secured your spot. Excited?
          {' '}
          <br />
          Feel free to share with your friends!
        </p>

        {/* Referral Link */}
        <div className="mb-8 flex w-full max-w-md items-center gap-2 rounded-full bg-gray-100 p-2 pr-2">
          <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-4 text-sm text-gray-500">
            {referralUrl}
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-10 w-10 rounded-full bg-gray-900 text-white hover:bg-gray-800 hover:text-white transition-all active:scale-95"
            onClick={handleCopy}
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied
                ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="h-4 w-4" />
                    </motion.div>
                  )
                : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Copy className="h-4 w-4" />
                    </motion.div>
                  )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Divider */}
        <div className="mb-8 text-sm text-gray-400">Or</div>

        {/* Social Share Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="h-12 gap-2 rounded-full bg-[#1E1E1E] px-8 text-white hover:bg-[#1E1E1E]/90"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
          >
            <Twitter className="h-4 w-4 fill-white" />
            Share
          </Button>
          <Button
            className="h-12 gap-2 rounded-full bg-[#22C55E] px-8 text-white hover:bg-[#22C55E]/90"
            onClick={() => window.open(`sms:?body=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank')}
          >
            <MessageCircle className="h-4 w-4" />
            Text
          </Button>
          <Button
            className="h-12 gap-2 rounded-full bg-[#3B82F6] px-8 text-white hover:bg-[#3B82F6]/90"
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
          >
            <Facebook className="h-4 w-4 fill-white" />
            Share
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
