import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function HistoryPage() {
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
                                    Min historie
                                </h1>
                                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    En oversikt over min utdanning og
                                    karrierevei gjennom årene.
                                </p>
                            </div>
                        </div>
                        <div className='mx-auto max-w-3xl space-y-8 py-12'>
                            <div className='relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800'>
                                <div className='absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground -translate-x-1/2'>
                                    <span className='h-2 w-2 rounded-full bg-current' />
                                </div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Universitetet i Oslo
                                        </CardTitle>
                                        <CardDescription>
                                            2018 - 2022
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            Master i Informatikk med
                                            spesialisering i programmering og
                                            systemarkitektur. Fokuserte på
                                            webteknologier, distribuerte
                                            systemer og brukergrensesnittdesign.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className='relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800'>
                                <div className='absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground -translate-x-1/2'>
                                    <span className='h-2 w-2 rounded-full bg-current' />
                                </div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Høgskolen i Oslo og Akershus
                                        </CardTitle>
                                        <CardDescription>
                                            2015 - 2018
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            Bachelor i Ingeniørfag -
                                            Dataingeniør. Lærte grunnleggende
                                            programmering, algoritmer,
                                            datastrukturer og systemutvikling.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className='relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800'>
                                <div className='absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground -translate-x-1/2'>
                                    <span className='h-2 w-2 rounded-full bg-current' />
                                </div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Oslo Videregående Skole
                                        </CardTitle>
                                        <CardDescription>
                                            2012 - 2015
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            Studiespesialisering med fordypning
                                            i realfag. Utviklet interesse for
                                            matematikk, fysikk og
                                            informasjonsteknologi.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
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
