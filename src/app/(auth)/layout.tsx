"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: "Register", path: "/register" },
  { name: "Login", path: "/login" },
  { name: "forget-password", path: "/forget-password" },
];


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <div>
            {navlinks.map((link) => {
                return (
                    <Link key={link.name} href={link.path}>
                        {link.name}
                    </Link>
                )
            })}
              {children}  
        </div>
    )
}
