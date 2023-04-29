import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <Link
                href={siteConfig.links.twitter}
                className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                target="_blank"
              >
                Volg ons op Twitter
              </Link>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                Vroemr. Ga Vooruit.
                <br className="hidden sm:inline" />
                <span className="hidden md:flex">
                  {" "}
                  Zet jouw rijschool in een versnelling met Vroemr.
                </span>
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Vroemr helpt rijscholen door heel Nederland met het
                automatiseren van hun administratie. Vroemr is een compleet
                pakket voor rijscholen, van het plannen van rijlessen tot het
                bijhouden van de administratie.
              </p>
              <div className="space-x-4">
                <Link
                  href="/login"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Begin nu!
                </Link>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" })
                  )}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </section>
          {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 2xl:py-20">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Vroemr. Ga vooruit. <br className="hidden sm:inline" />
            <span className="hidden md:flex">
              Geef jouw rijschool een "versnelling" met Vroemr.
            </span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Vroemr helpt rijscholen door heel Nederland met het automatiseren
            van hun administratie. Vroemr is een compleet pakket voor
            rijscholen, van het plannen van rijlessen tot het bijhouden van de
            administratie.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Registreren
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </section> */}
          <section
            id="features"
            className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
          >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Features
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Vroemr is een moderne web app gebouwd om rijscholen te ontzien,
                met features zoals leerlingen administratie, digitale
                leskaarten, agenda, en een website builder zodat je jouw
                rijschool gelijk voorziet van een website.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <Icons.globe className="-ml-14 mb-4 h-40 w-40 " />
                  <div className="space-y-2">
                    <h3 className="font-bold">Website Builder</h3>
                    <p className="text-sm text-muted-foreground">
                      Bouw een website voor je rijschool met onze website
                      builder.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <Icons.userCheck className="-ml-14 mb-4 h-40 w-40 " />
                  <div className="space-y-2">
                    <h3 className="font-bold">Leerlingen Administratie</h3>
                    <p className="text-sm">
                      Een leerlingen administratie systeem voor rijscholen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <Icons.calendarDays className="-ml-14 mb-4 h-40 w-40 " />
                  <div className="space-y-2">
                    <h3 className="font-bold">Slimme Agenda</h3>
                    <p className="text-sm text-muted-foreground">
                      Een agenda waarin jouw leerlingen lessen kunnen inplannen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <Icons.clipboardCheck className="-ml-14 mb-4 h-40 w-40 " />
                  <div className="space-y-2">
                    <h3 className="font-bold">Digitale Leskaart</h3>
                    <p className="text-sm text-muted-foreground">
                      Een digitale leskaart om de vooruitgangen inzichtelijk te
                      maken.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <Icons.users className="-ml-14 mb-4 h-40 w-40 " />
                  <div className="space-y-2">
                    <h3 className="font-bold">Meerdere Docenten</h3>
                    <p className="text-sm text-muted-foreground">
                      Meerdere docenten kunnen gebruik maken van het systeem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <Icons.cloudCog className="-ml-14 mb-4 h-40 w-40 " />
                  <div className="space-y-2">
                    <h3 className="font-bold">API</h3>
                    <p className="text-sm text-muted-foreground">
                      Vroemr is voorzien van een API met documentatie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto text-center md:max-w-[58rem]">
              <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Vroemr is ook voorzien van een API met documentatie. Deze API is
                beschikbaar voor iedereen die een abonnement heeft op Vroemr.
              </p>
            </div>
          </section>
          <section
            id="open-source"
            className="container py-8 md:py-12 lg:py-24"
          >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Proudly Open Source
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Vroemr is open source en ondersteund door open source software.{" "}
                <br /> De code is beschikbaar op{" "}
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  GitHub
                </Link>
                .{" "}
              </p>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-foreground"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                  <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                    0 stars on GitHub
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
