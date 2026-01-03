import Link from "next/link";
import { Heart, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export function Footer(){
    return(
        <footer className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="group inline-flex items-center gap-2">
                            <h3 className="text-2xl font-bold">
                                Agenda<span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">LAJINHA</span>
                            </h3>
                            <Sparkles className="w-5 h-5 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Conectando você aos melhores profissionais de Lajinha de forma simples e organizada.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
                        <ul className="space-y-2">
                            {['Profissionais', 'Como Funciona', 'Sobre Nós', 'Contato'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        href="#" 
                                        className="text-zinc-400 hover:text-red-500 text-sm transition-colors duration-300 inline-block hover:translate-x-1"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contato</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                                <span>Lajinha, Minas Gerais</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                                <a href="mailto:contato@agendalajinha.com" className="hover:text-red-500 transition-colors duration-300">
                                    frank.melo.wal@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                                <a href="tel:+5533997050303" className="hover:text-red-500 transition-colors duration-300">
                                    (19) 99705-0303
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Fique por dentro</h4>
                        <p className="text-zinc-400 text-sm">
                            Receba novidades sobre novos profissionais e funcionalidades.
                        </p>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Seu e-mail"
                                className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                            />
                            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold text-sm transition-all duration-300 hover:scale-105">
                                OK
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

                {/* Bottom Footer */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-400 text-sm text-center md:text-left">
                        Todos os direitos reservados &copy; {new Date().getFullYear()} - AgendaLAJINHA
                    </p>
                    
                    <div className="flex items-center gap-1 text-zinc-400 text-sm">
                        <span>Desenvolvido com</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>por</span>
                        <a 
                            href="https://github.com/franklim" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-500 hover:text-red-400 font-semibold transition-colors duration-300"
                        >
                            @franklim melo
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}