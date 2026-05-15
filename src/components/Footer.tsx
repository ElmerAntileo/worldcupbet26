import {Link} from "@/i18n/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16 py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-wrap gap-6 justify-between items-center">
        <p className="text-gray-400 text-sm">18+ | Gamble Responsibly | WorldCupBet26 contains affiliate links</p>
        <div className="flex gap-6 text-sm">
          <Link href="/responsible-gambling" className="text-gray-400 hover:text-white">Responsible Gambling</Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
