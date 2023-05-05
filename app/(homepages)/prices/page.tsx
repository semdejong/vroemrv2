import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Kies welk plan je nodig hebt, upgraden kan altijd nog.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            Wat kan je met het FREE plan.
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Tot 20 leerlingen
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Tot 2 docenten
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> 3 pagina&apos;s voor je
              website
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Basic support
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Voor altijd gratis
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Vroemr watermerk
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">€0</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Per docent, per maand
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Begin nu
          </Link>
        </div>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            Wat kun je met het PRO plan.
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Oneindig leerlingen
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Oneindig docenten
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Oneindig pagina&apos;s
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Ssl certificaat
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Autmatische facturatie
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium support
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Al het andere wat Vroemr
              te bieden heeft
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">€32</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Per docent, per maand
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Ga voor PRO
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Vroemr is een open source web-app.{" "}
          <strong>
            Je kunt deze zelf hosten, en dan heb je toegang tot alle features.
          </strong>
        </p>
      </div>
    </section>
  )
}
