"use client"

import Link from "next/link"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { LogIn, Menu, User, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { href: "#profissionais", label: "Profissionais" },
]

type Session = {
  user: {
    name: string
  }
} | null

type NavLinksProps = {
  closeMenu?: () => void,
  session: Session,
}

function NavLinks({ closeMenu, session}: NavLinksProps) {
  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          onClick={closeMenu}
          variant="ghost"
          className="relative text-sm font-medium text-zinc-700 hover:text-red-800 hover:bg-red-50/50 transition-all duration-300 group"
        >
          <Link href={item.href} className="flex items-center gap-2">
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </Button>
      ))}

      {session ? (
        <Button
          asChild
          onClick={closeMenu}
          className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Painel
          </Link>
        </Button>
      ):(
        <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
          <LogIn className="w-4 h-4" />
          Fazer login
        </Button>
      )}
    </>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const session:Session = null

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-white/95 backdrop-blur-lg shadow-xl shadow-black/5' 
        : 'py-5 bg-white/90 backdrop-blur-md shadow-lg shadow-black/5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">

        <Link href="/" className="group flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <h1 className={`relative font-bold text-zinc-900 transition-all duration-300 ${
              scrolled ? 'text-2xl' : 'text-3xl'
            }`}>
              Agenda<span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">LAJINHA</span>
            </h1>
          </div>
          <Sparkles className={`text-red-600 group-hover:rotate-12 transition-transform duration-300 ${
            scrolled ? 'w-4 h-4' : 'w-5 h-5'
          }`} />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLinks session={session}/>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-zinc-700 hover:text-red-800 hover:bg-red-50/50 transition-all duration-300 hover:scale-105"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent 
            side="right" 
            className="w-80 sm:w-[350px] z-[9999] bg-gradient-to-br from-white via-red-50/30 to-white border-l-2 border-red-100"
          >
            <SheetHeader className="space-y-3">
              <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Menu
              </SheetTitle>
              <SheetDescription className="text-zinc-600">
                Navegue pelas nossas opções
              </SheetDescription>
            </SheetHeader>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-red-200 to-transparent my-6"></div>

            <nav className="flex flex-col space-y-3">
              <NavLinks
                session={session}
                closeMenu={() => setIsOpen(false)} 
              />
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200/50">
                <p className="text-xs text-zinc-600 text-center">
                  Transformando agendamentos em{" "}
                  <span className="font-semibold text-red-800">experiências</span>
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}