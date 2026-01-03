"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Banknote, CalendarCheck, ChevronLeft, ChevronRight, Folder, List, Settings, Sparkles } from "lucide-react"
import Link from "next/link"

export function SidebarDashboard({children}: {children: React.ReactNode}){
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)

    return(
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Desktop Sidebar */}
            <aside className={clsx(
                "hidden md:flex fixed left-0 top-0 h-screen flex-col bg-white border-r border-gray-200 shadow-xl transition-all duration-300 z-40",
                {
                    "w-20": isCollapsed,
                    "w-64": !isCollapsed,
                }
            )}>
                {/* Logo Section */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-red-50 to-white">
                    {!isCollapsed && (
                        <Link href="/" className="flex items-center gap-2 group">
                            <h1 className="text-xl font-bold">
                                Agenda<span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">LAJINHA</span>
                            </h1>
                            <Sparkles className="w-4 h-4 text-red-600 group-hover:rotate-12 transition-transform duration-300" />
                        </Link>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
                    >
                        {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <SidebarLink 
                        href="/dashboard"
                        label="Agendamentos"
                        pathname={pathname}
                        isCollapsed={isCollapsed}
                        icon={<CalendarCheck className="w-5 h-5"/>}
                    />

                    <SidebarLink 
                        href="/dashboard/service"
                        label="Serviços"
                        pathname={pathname}
                        isCollapsed={isCollapsed}
                        icon={<Folder className="w-5 h-5"/>}
                    />

                    <SidebarLink 
                        href="/dashboard/profile"
                        label="Meu perfil"
                        pathname={pathname}
                        isCollapsed={isCollapsed}
                        icon={<Settings className="w-5 h-5"/>}
                    />

                    <SidebarLink 
                        href="/dashboard/plans"
                        label="Planos"
                        pathname={pathname}
                        isCollapsed={isCollapsed}
                        icon={<Banknote className="w-5 h-5"/>}
                    />
                </nav>

                {/* Footer Section */}
                {!isCollapsed && (
                    <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-red-50 to-white">
                        <div className="text-xs text-gray-600 space-y-1">
                            <p className="font-semibold text-gray-900">Dashboard Premium</p>
                            <p>Versão 1.0.0</p>
                        </div>
                    </div>
                )}
            </aside>
            
            {/* Main Content */}
            <div className={clsx("flex flex-1 flex-col transition-all duration-300",{
                "md:ml-20" : isCollapsed,
                "md:ml-64" : !isCollapsed,
            })}>
                {/* Mobile Header */}
                <header className="md:hidden flex items-center justify-between border-b border-gray-200 px-4 h-16 z-10 sticky top-0 bg-white shadow-md">
                    <Sheet>
                        <div className="flex items-center gap-3">
                            <SheetTrigger asChild>
                                <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-all duration-300"
                                >
                                    <List className="w-5 h-5"/>
                                </Button>
                            </SheetTrigger>
                            <Link href="/" className="flex items-center gap-2">
                                <h1 className="text-lg font-bold">
                                    Agenda<span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">LAJINHA</span>
                                </h1>
                            </Link>
                        </div>

                        <SheetContent side="left" className="w-80 bg-gradient-to-br from-white via-red-50/30 to-white">
                            <SheetTitle className="text-2xl font-bold">
                                <span className="text-zinc-900">Agenda</span>
                                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">LAJINHA</span>
                            </SheetTitle>
                            <SheetDescription className="text-gray-600">
                                Menu administrativo
                            </SheetDescription>
                            
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-red-200 to-transparent my-6"></div>

                            <nav className="space-y-2 pt-2">
                                <SidebarLink 
                                    href="/dashboard"
                                    label="Agendamentos"
                                    pathname={pathname}
                                    isCollapsed={false}
                                    icon={<CalendarCheck className="w-5 h-5"/>}
                                />

                                <SidebarLink 
                                    href="/dashboard/service"
                                    label="Serviços"
                                    pathname={pathname}
                                    isCollapsed={false}
                                    icon={<Folder className="w-5 h-5"/>}
                                />

                                <SidebarLink 
                                    href="/dashboard/profile"
                                    label="Meu perfil"
                                    pathname={pathname}
                                    isCollapsed={false}
                                    icon={<Settings className="w-5 h-5"/>}
                                />

                                <SidebarLink 
                                    href="/dashboard/plans"
                                    label="Planos"
                                    pathname={pathname}
                                    isCollapsed={false}
                                    icon={<Banknote className="w-5 h-5"/>}
                                />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-4 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

interface SidebarLinkProps{
    href: string,
    icon: React.ReactNode,
    label: string,
    pathname: string,
    isCollapsed: boolean,
}

function SidebarLink({href, icon, label, pathname, isCollapsed}: SidebarLinkProps){
    const isActive = pathname === href
    
    return(
        <Link href={href} className="block">
            <div className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                {
                    "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/30": isActive,
                    "text-gray-700 hover:bg-red-50 hover:text-red-600": !isActive,
                    "justify-center": isCollapsed,
                }
            )}>
                {/* Active indicator */}
                {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                )}
                
                {/* Icon */}
                <span className={clsx(
                    "transition-transform duration-300",
                    {
                        "group-hover:scale-110": !isActive,
                    }
                )}>
                    {icon}
                </span>
                
                {/* Label */}
                {!isCollapsed && (
                    <span className="font-medium text-sm">{label}</span>
                )}

                {/* Hover effect for inactive items */}
                {!isActive && (
                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-300 rounded-xl"></div>
                )}
            </div>
        </Link>
    )
}