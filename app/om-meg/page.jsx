import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='px-4 lg:px-6 h-14 flex items-center'>
                <Link className='flex items-center justify-center' href='/'>
                    <span className='font-bold text-xl'>Portfolio</span>
                </Link>
                <nav className='ml-auto flex gap-4 sm:gap-6'>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/'
                    >
                        Hjem
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/om-meg'
                    >
                        Om meg
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/historie'
                    >
                        Historie
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/erfaringer'
                    >
                        Erfaringer
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/kontakt'
                    >
                        Kontakt
                    </Link>
                </nav>
            </header>
            <main className='flex-1'>
                <section className='w-full py-12 md:py-24 lg:py-32'>
                    <div className='container px-4 md:px-6'>
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div className='space-y-2'>
                                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                                    Om meg
                                </h1>
                                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    Lær mer om hvem jeg er, mine ferdigheter og
                                    hva jeg brenner for.
                                </p>
                            </div>
                        </div>
                        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
                            <div className='flex flex-col justify-center space-y-4'>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
                                        Min bakgrunn
                                    </h2>
                                    <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                                        Jeg er en lidenskapelig utvikler med
                                        fokus på webteknologier og
                                        brukeropplevelse. Med en solid bakgrunn
                                        innen programmering og design, streber
                                        jeg etter å skape løsninger som er både
                                        funksjonelle og estetisk tiltalende.
                                    </p>
                                    <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                                        På fritiden liker jeg å utforske nye
                                        teknologier, bidra til open
                                        source-prosjekter og delta i hackathons
                                        for å holde meg oppdatert og utfordre
                                        meg selv.
                                    </p>
                                </div>
                            </div>
                            <img
                                alt='Om meg'
                                className='mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                                height='500'
                                src='/placeholder.svg?height=500&width=500'
                                width='500'
                            />
                        </div>
                        <div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
                            <Card>
                                <CardContent className='p-6'>
                                    <div className='space-y-2'>
                                        <h3 className='text-xl font-bold'>
                                            Tekniske ferdigheter
                                        </h3>
                                        <div className='flex flex-wrap gap-2'>
                                            <Badge>JavaScript</Badge>
                                            <Badge>React</Badge>
                                            <Badge>Next.js</Badge>
                                            <Badge>HTML/CSS</Badge>
                                            <Badge>Node.js</Badge>
                                            <Badge>SQL</Badge>
                                            <Badge>Git</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className='p-6'>
                                    <div className='space-y-2'>
                                        <h3 className='text-xl font-bold'>
                                            Personlige egenskaper
                                        </h3>
                                        <div className='flex flex-wrap gap-2'>
                                            <Badge variant='outline'>
                                                Problemløser
                                            </Badge>
                                            <Badge variant='outline'>
                                                Teamspiller
                                            </Badge>
                                            <Badge variant='outline'>
                                                Kreativ
                                            </Badge>
                                            <Badge variant='outline'>
                                                Analytisk
                                            </Badge>
                                            <Badge variant='outline'>
                                                Detaljorientert
                                            </Badge>
                                            <Badge variant='outline'>
                                                Selvgående
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className='p-6'>
                                    <div className='space-y-2'>
                                        <h3 className='text-xl font-bold'>
                                            Interesser
                                        </h3>
                                        <div className='flex flex-wrap gap-2'>
                                            <Badge variant='secondary'>
                                                Teknologi
                                            </Badge>
                                            <Badge variant='secondary'>
                                                Design
                                            </Badge>
                                            <Badge variant='secondary'>
                                                Fotografi
                                            </Badge>
                                            <Badge variant='secondary'>
                                                Reising
                                            </Badge>
                                            <Badge variant='secondary'>
                                                Musikk
                                            </Badge>
                                            <Badge variant='secondary'>
                                                Friluftsliv
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                    © 2024 Portfolio. Alle rettigheter reservert.
                </p>
                <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
                    <Link
                        className='text-xs hover:underline underline-offset-4'
                        href='#'
                    >
                        Personvern
                    </Link>
                    <Link
                        className='text-xs hover:underline underline-offset-4'
                        href='#'
                    >
                        Vilkår
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
