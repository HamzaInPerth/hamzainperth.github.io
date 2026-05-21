import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/experiences', label: 'Experience' },
        { href: '/works', label: 'Projects' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/">
                    <a className="text-xl font-bold text-white tracking-tight">
                        H<span className="text-accent">.</span>
                    </a>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map(link => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <a className={`nav-link ${router.pathname === link.href ? 'nav-link-active' : ''}`}>
                                    {link.label}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href="mailto:chikhi.h@gmail.com"
                            className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-dark-800 border-t border-white/5 px-6 py-6 animate-fade-in">
                    <ul className="flex flex-col gap-4">
                        {links.map(link => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    <a
                                        onClick={() => setOpen(false)}
                                        className={`block text-lg font-medium ${router.pathname === link.href ? 'text-white' : 'text-gray-400'}`}
                                    >
                                        {link.label}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a
                                href="mailto:chikhi.h@gmail.com"
                                className="inline-block px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;