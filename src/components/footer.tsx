import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500">
      <div className="mb-6 flex justify-center gap-6">
        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
          <Github className="h-5 w-5" />
        </a>
      </div>
      <p>© 2025 Celery. All rights reserved.</p>
    </footer>
  );
}
