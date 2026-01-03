import { Button } from "@/components/ui/button";
import Image from "next/image";
import imgHero from "../../../../public/imghero.png"
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function Hero(){
    return(
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-white pt-20">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container relative mx-auto px-4 pt-24 pb-20 sm:px-6 lg:px-8">
                <main className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    
                    {/* Content Section */}
                    <article className="flex-1 space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left duration-700">
                        
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/80 backdrop-blur-sm border border-red-200/50">
                            <Sparkles className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">
                                Plataforma #1 em Lajinha
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-zinc-900">Encontre os</span>
                                <br />
                                <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                                    melhores profissionais
                                </span>
                                <br />
                                <span className="text-zinc-900">em um único lugar!</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed">
                                Somos uma plataforma para profissionais de diversas áreas com foco em{" "}
                                <span className="font-semibold text-zinc-900">agilizar seu atendimento</span>{" "}
                                de forma simplificada e organizada.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Button 
                                size="lg"
                                className="group bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                Ver Profissionais
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            
                            <Button 
                                variant="outline"
                                size="lg"
                                className="border-2 border-zinc-300 hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 w-full sm:w-auto"
                            >
                                Saiba Mais
                            </Button>
                        </div>

                        
                    </article>

                    {/* Image Section */}
                    <div className="flex-1 relative animate-in fade-in slide-in-from-right duration-700 delay-150 hidden lg:block">
                        {/* Decorative background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-3xl blur-3xl scale-110"></div>
                        
                        {/* Image container */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                            
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-red-500/20 border-4 border-white transform group-hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src={imgHero}
                                    alt="Profissionais oferecendo serviços de qualidade"
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce-slow border border-red-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-sm font-semibold text-zinc-900">Online agora</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-red-100">
                                <p className="text-2xl font-bold text-red-600">4.9★</p>
                                <p className="text-xs text-zinc-600">Avaliação média</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}