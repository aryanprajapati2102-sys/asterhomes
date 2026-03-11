"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer, IconButton } from "@mui/material";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/location", label: "Location" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          Aster Homes
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-primary" : "text-slate-600 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{ backgroundColor: "#E07A24", textTransform: "none", borderRadius: "10px" }}
          >
            Enquire Now
          </Button>
        </nav>

        <IconButton
          onClick={() => setOpen(true)}
          className="md:!hidden"
          aria-label="Open menu"
          sx={{ color: "#0B3C6D" }}
        >
          <Menu size={22} />
        </IconButton>
      </div>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="flex h-full w-64 flex-col gap-2 p-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                pathname === link.href ? "bg-blue-50 text-primary" : "text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
