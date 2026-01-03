import { Card, CardFooter, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import fotoPerfil from "../../../../public/perfil.jpeg"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Profissionais(){
    return(
        <section className="bg-gray-50 py-16 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center mb-12 font-bold">
                    Profissionais disponiveis
                </h2>
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="p-0 overflow-hidden">
                        <CardContent className="p-0 ">
                            <div>
                                <div className="relative h-48">
                                    <Image
                                    src={fotoPerfil}
                                    alt="foto do profissional"
                                    fill
                                    className="object-contain"/>
                                </div>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-zinc-900 leading-tight">
                                    Centro
                                    </h3>

                                    <p className="text-sm text-zinc-600 leading-snug line-clamp-2">
                                    Av. Natal Rodrigues Pereira, Centro, Lajinha-MG
                                    </p>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-xs text-zinc-500">Online</span>
                                </div>
                                </div>

                                <Link href="/local/123"
                                className="w-full bg-red-500 hover:bg-red-400 text-white flex items-center justify-center py-2 rounded-md text-sm font-medium md:text-base">
                                    Agendar horario
                                    <ArrowRight className="nl-2"/>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                
                </section>
            </div>
        </section>
    )
}