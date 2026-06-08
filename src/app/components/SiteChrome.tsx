import Link from "next/link";
import PrivacySettingsLink from "./PrivacySettingsLink";

const navigation = [
  { href: "/", label: "Log Cleaner" },
  { href: "/prompt-clinic", label: "Prompt Clinic" },
  { href: "/ai-news", label: "AI News" },
  { href: "/resources", label: "Resources" },
  { href: "/field-notes", label: "AI Field Notes" },
  { href: "/before-after-log-examples", label: "Examples" },
  { href: "/ai-debugging-workflow-templates", label: "Templates" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-stone-950/70 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 font-mono text-sm font-semibold text-emerald-200">
            CC
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">ContextClean</span>
            <span className="block text-xs text-stone-400">Local-first log cleaner</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-2 text-sm">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-stone-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-sm text-stone-400 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-semibold text-white">ContextClean</p>
          <p className="mt-3 max-w-2xl leading-6">
            A free browser-based utility for reducing noisy debugging logs before
            sharing them with a teammate or AI coding assistant. Always review the
            result and remove sensitive data before sharing.
          </p>
          <p className="mt-3 text-xs text-stone-500">
            Maintained through the public ContextClean GitHub repository.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <PrivacySettingsLink />
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/prompt-clinic" className="hover:text-white">Prompt Clinic</Link>
          <Link href="/ai-news" className="hover:text-white">AI News</Link>
          <Link href="/field-notes" className="hover:text-white">AI Field Notes</Link>
          <Link href="/community" className="hover:text-white">Community</Link>
        </nav>
      </div>
    </footer>
  );
}
