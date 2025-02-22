"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

interface Route {
  name: string
  path: string
  icon: JSX.Element
}

interface SocialLink {
  name: string
  url: string
  icon: JSX.Element
}

const routes: Route[] = [
  { name: 'Home', path: '/', icon: <Icon icon="material-symbols:home-outline" className="h-5 w-5" /> },
  { name: 'About', path: '/about', icon: <Icon icon="ph:info-light" className="h-5 w-5" /> },
  { name: 'Officers', path: '/officers', icon: <Icon icon="ph:users-three-light" className="h-5 w-5" /> },
  { name: 'Programs', path: '/programs', icon: <Icon icon="ph:graduation-cap-light" className="h-5 w-5" /> },
  { name: 'Resources', path: '/resources', icon: <Icon icon="ph:books-light" className="h-5 w-5" /> },
]

const socialLinks: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com/cyber.ed', icon: <Icon icon="ri:instagram-line" className="h-5 w-5" /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/cyber-ed', icon: <Icon icon="ri:linkedin-line" className="h-5 w-5" /> },
]

import { FC } from 'react'

export const Navbar: FC = () => {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="absolute inset-0 pattern-topography pattern-blue-500 pattern-bg-white pattern-opacity-5 pattern-size-6" />
      <header className="mx-auto max-w-7xl relative">
        <nav className="relative flex items-center justify-between rounded-2xl border-2 border-blue-500/20 bg-background/80 px-6 py-4 shadow-xl backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 hover:border-blue-500/30 transition-all duration-300">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300 animate-gradient-xy">
              <Icon icon="ph:shield-check-bold" className="w-6 h-6 text-white animate-pulse" />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Cyber-Ed</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  'flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-blue-500/10',
                  pathname === route.path 
                    ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-foreground/60 hover:text-foreground'
                )}
              >
                {route.icon}
                <span>{route.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center space-x-2 pl-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-blue-500/10 text-foreground/60 hover:text-foreground transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
            <div className="pl-2 border-l border-blue-500/20">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-xl h-9 w-9 hover:bg-blue-500/10">
                  <Icon icon="ph:list-bold" className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-[80vh] pt-16 pattern-topography pattern-blue-500 pattern-bg-white pattern-opacity-5 pattern-size-6">
                <div className="flex flex-col items-center space-y-4">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={cn(
                        "w-full max-w-xs rounded-xl px-8 py-4 text-center text-base font-medium transition-all duration-300 flex items-center justify-center gap-3",
                        pathname === route.path 
                          ? "bg-blue-500/15 text-blue-600 dark:text-blue-400 shadow-sm" 
                          : "text-foreground/60 hover:text-foreground hover:bg-blue-500/10"
                      )}
                    >
                      {route.icon}
                      {route.name}
                    </Link>
                  ))}
                  <div className="flex flex-col items-center w-full max-w-xs space-y-4 pt-6 border-t border-blue-500/20">
                    <div className="flex justify-center space-x-6 w-full">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl hover:bg-blue-500/10 text-foreground/60 hover:text-foreground transition-all duration-300"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div>
  )
}