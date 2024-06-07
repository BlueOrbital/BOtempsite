'use client'

import React from "react";
import home from "@/../public/Icons/home.svg";
import services from "@/../public/Icons/services.svg";
import portfolio from "@/../public/Icons/portfolio.svg";
import contact from "@/../public/Icons/contact.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface LinkItem {
    name: string,
    href: string,
    icon: React.ReactElement,
}

const links = [
  { name: "Home", href: "/", icon: home },
  { name: "Services", href: "/services", icon: services },
  { name: "Portfolio", href: "/portfolio", icon: portfolio },
  { name: "About", href: "/about", icon: portfolio },
  { name: "Contact", href: "/contact", icon: contact },
];

export default function Navlinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link: LinkItem) => {
                // const icon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        passHref
                        className={clsx(
                            'flex flex-col flex-wrap h-fit w-fit',
                            {
                            'bg-sky-100 text-blue-600': pathname === link.href,
                            }
                        )}
                    >
                        {/* <icon /> */}
                        <p className='font-raleway'>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}