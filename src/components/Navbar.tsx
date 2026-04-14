"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/",          label: "ראשי" },
  { href: "/games",     label: "משחקים" },
  { href: "/news",      label: "חדשות" },
  { href: "/community", label: "קהילה" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(13,15,18,0.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="GAMERS logo">
            <rect width="36" height="36" rx="8" fill="url(#gLogo)"/>
            <path d="M8 18h5v5H8v-5zm0-7h5v5H8v-5zm7 0h5v12h-5V11zm7 4h6v4h-6v-4zm0 5h6v3h-6v-3z" fill="white"/>
            <defs>
              <linearGradient id="gLogo" x1="0" y1="0" x2="36" y2="36">
                <stop stopColor="#7c3aed"/>
                <stop offset="1" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.08em", background: "linear-gradient(90deg,#a78bfa,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            GAMERS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "0.25rem" }} className="desktop-nav">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} style={{
              padding: "0.45rem 1rem",
              borderRadius: "var(--radius-md)",
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: pathname === n.href ? "#a78bfa" : "var(--color-text-muted)",
              background: pathname === n.href ? "rgba(124,58,237,0.15)" : "transparent",
              transition: "all 0.2s",
            }}>
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href="/admin" style={{
            padding: "0.45rem 1rem",
            borderRadius: "var(--radius-md)",
            background: "rgba(124,58,237,0.2)",
            border: "1px solid rgba(124,58,237,0.4)",
            color: "#a78bfa",
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "flex", alignItems: "center", gap: "0.4rem",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            ניהול
          </Link>
          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} style={{ display: "none", color: "var(--color-text)" }} className="hamburger" aria-label="תפריט">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
              padding: "0.75rem 1rem", borderRadius: "var(--radius-md)",
              fontFamily: "var(--font-display)", fontSize: "var(--text-base)", fontWeight: 600,
              textDecoration: "none", color: pathname === n.href ? "#a78bfa" : "var(--color-text)",
              background: pathname === n.href ? "rgba(124,58,237,0.15)" : "transparent",
            }}>{n.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
