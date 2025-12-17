"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
  { name: "Register", path: "/register" },
  { name: "Login", path: "/login" },
  { name: "forget-password", path: "/forget-password" },
];


export function ClientButton() {
  return <button>Click me</button>;
}



export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return (
        <div>
            <div>
                <input  value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            {navlinks.map((link) => {
                const isActive = pathname === link.path || (pathname.startsWith(link.path) && link.path !== "/");
                return (
                    <Link className={isActive? "text-blue-500 font-bold mr-4" : "text-blue-500 mr-4"} key={link.name} href={link.path}>
                        {link.name}
                    </Link>
                )
            })}
              {children}  
        </div>
    )
}
