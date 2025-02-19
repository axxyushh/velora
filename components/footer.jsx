import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-300 py-6 bg-opacity-10">
      <div className="mx-auto px-4 text-center text-gray-900">
        <p className="text-sm">© {new Date().getFullYear()} Velora. All rights reserved.</p>
        <p className="mt-1 text-sm">Made by Ayush Srivastava</p>
        <div className="mt-3 flex justify-center space-x-4 ">
          <Link className="animate-bounce hover:animate-none" href="https://www.instagram.com/axxyushh/#" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-gray-900 hover:text-gray-700 transition" />
          </Link>
          <Link className="animate-bounce hover:animate-none" href="https://in.linkedin.com/in/ayush-srivastava-279a64287?trk=public_profile_like_view_actor-name" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-gray-900 hover:text-gray-700 transition" />
          </Link>
          <Link className="animate-bounce hover:animate-none" href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 text-gray-900 hover:text-gray-700 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
