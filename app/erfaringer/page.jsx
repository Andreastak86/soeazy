import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExperiencesPage() {
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
                                    Mine erfaringer
                                </h1>
                                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    En oversikt over mine arbeidsoppgaver og
                                    prosjekter.
                                </p>
                            </div>
                        </div>
                        <div className='mx-auto max-w-4xl py-12'>
                            <Tabs defaultValue='work' className='w-full'>
                                <TabsList className='grid w-full grid-cols-2'>
                                    <TabsTrigger value='work'>
                                        Arbeidserfaring
                                    </TabsTrigger>
                                    <TabsTrigger value='projects'>
                                        Prosjekter
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent
                                    value='work'
                                    className='space-y-6 mt-6'
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Senior Frontend Utvikler
                                            </CardTitle>
                                            <CardDescription>
                                                TechCorp AS | 2022 - Nåværende
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className='list-disc pl-5 space-y-2'>
                                                <li>
                                                    Ledet utviklingen av
                                                    selskapets hovedprodukt med
                                                    React og Next.js
                                                </li>
                                                <li>
                                                    Implementerte responsive
                                                    design og forbedret
                                                    brukeropplevelsen
                                                </li>
                                                <li>
                                                    Samarbeidet med UX-designere
                                                    for å skape intuitive
                                                    grensesnitt
                                                </li>
                                                <li>
                                                    Mentorerte junior utviklere
                                                    og ledet kodegjennomganger
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <div className='flex flex-wrap gap-2'>
                                                <Badge>React</Badge>
                                                <Badge>Next.js</Badge>
                                                <Badge>TypeScript</Badge>
                                                <Badge>Tailwind CSS</Badge>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Frontend Utvikler
                                            </CardTitle>
                                            <CardDescription>
                                                WebSolutions | 2020 - 2022
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className='list-disc pl-5 space-y-2'>
                                                <li>
                                                    Utviklet og vedlikeholdt
                                                    kundeportaler for flere
                                                    store klienter
                                                </li>
                                                <li>
                                                    Implementerte nye funksjoner
                                                    og forbedret eksisterende
                                                    kodebase
                                                </li>
                                                <li>
                                                    Jobbet tett med
                                                    backend-utviklere for å
                                                    integrere API-er
                                                </li>
                                                <li>
                                                    Deltok i agile
                                                    utviklingsprosesser med
                                                    daglige stand-ups
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <div className='flex flex-wrap gap-2'>
                                                <Badge>JavaScript</Badge>
                                                <Badge>React</Badge>
                                                <Badge>CSS</Badge>
                                                <Badge>REST API</Badge>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Junior Utvikler
                                            </CardTitle>
                                            <CardDescription>
                                                StartupTech | 2018 - 2020
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className='list-disc pl-5 space-y-2'>
                                                <li>
                                                    Assisterte i utviklingen av
                                                    webapplikasjoner
                                                </li>
                                                <li>
                                                    Fikset bugs og implementerte
                                                    mindre funksjoner
                                                </li>
                                                <li>
                                                    Lærte moderne
                                                    webutviklingsmetoder og
                                                    verktøy
                                                </li>
                                                <li>
                                                    Deltok i kodegjennomganger
                                                    og parprogrammering
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <div className='flex flex-wrap gap-2'>
                                                <Badge>HTML</Badge>
                                                <Badge>CSS</Badge>
                                                <Badge>JavaScript</Badge>
                                                <Badge>jQuery</Badge>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                                <TabsContent
                                    value='projects'
                                    className='space-y-6 mt-6'
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                E-handelsplattform
                                            </CardTitle>
                                            <CardDescription>
                                                2023
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='mb-4'>
                                                Utviklet en fullstendig
                                                e-handelsløsning med
                                                produktkatalog, handlekurv,
                                                betalingsintegrasjon og
                                                ordrebehandling. Implementerte
                                                responsivt design og
                                                optimaliserte for mobilbruk.
                                            </p>
                                            <div className='aspect-video overflow-hidden rounded-lg'>
                                                <img
                                                    src='/placeholder.svg?height=225&width=400'
                                                    alt='E-handelsplattform'
                                                    className='object-cover w-full h-full'
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <div className='flex flex-wrap gap-2'>
                                                <Badge>Next.js</Badge>
                                                <Badge>Stripe</Badge>
                                                <Badge>MongoDB</Badge>
                                                <Badge>Tailwind CSS</Badge>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Booking-system
                                            </CardTitle>
                                            <CardDescription>
                                                2022
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='mb-4'>
                                                Designet og utviklet et
                                                booking-system for en lokal
                                                tjenesteleverandør. Systemet
                                                inkluderer kalendervisning,
                                                tilgjengelighetssjekk,
                                                brukerkontoer og
                                                administrasjonspanel.
                                            </p>
                                            <div className='aspect-video overflow-hidden rounded-lg'>
                                                <img
                                                    src='/placeholder.svg?height=225&width=400'
                                                    alt='Booking-system'
                                                    className='object-cover w-full h-full'
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <div className='flex flex-wrap gap-2'>
                                                <Badge>React</Badge>
                                                <Badge>Node.js</Badge>
                                                <Badge>Express</Badge>
                                                <Badge>PostgreSQL</Badge>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Sosial Medieplattform
                                            </CardTitle>
                                            <CardDescription>
                                                2021
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='mb-4'>
                                                Bygget en nisje-fokusert sosial
                                                medieplattform for
                                                hobbyentusiaster. Funksjoner
                                                inkluderer brukerregistrering,
                                                profilsider, innleggsdeling,
                                                kommentarer og direktemeldinger.
                                            </p>
                                            <div className='aspect-video overflow-hidden rounded-lg'>
                                                <img
                                                    src='/placeholder.svg?height=225&width=400'
                                                    alt='Sosial Medieplattform'
                                                    className='object-cover w-full h-full'
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <div className='flex flex-wrap gap-2'>
                                                <Badge>React</Badge>
                                                <Badge>Firebase</Badge>
                                                <Badge>Cloud Functions</Badge>
                                                <Badge>Material UI</Badge>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
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
