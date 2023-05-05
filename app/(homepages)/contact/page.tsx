import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Switcher from "@/components/ui/swticher"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Contact",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Neem contact op
        </h2>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Contact opnemen</h3>
          <p className="text-sm text-muted-foreground sm:text-lg sm:leading-7">
            Wat is je email adres?
          </p>
          <Input />
          <p className="text-sm text-muted-foreground sm:text-lg sm:leading-7">
            Wat is je vraag?
          </p>
          <Textarea />
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            Waar gaat je vraag over?
            <Switcher
              switcherName="onderwerp"
              groups={[
                {
                  label: "Algemeen",
                  teams: [
                    {
                      label: "Test onderwerp",
                      value: "personal",
                    },
                  ],
                },
                {
                  label: "Technisch",
                  teams: [
                    {
                      label: "Acme Inc.",
                      value: "acme-inc",
                    },
                    {
                      label: "Monsters Inc.",
                      value: "monsters",
                    },
                  ],
                },
                {
                  label: "Technisch",
                  teams: [
                    {
                      label: "Acme Inc.",
                      value: "acme-inc",
                    },
                    {
                      label: "Monsters Inc.",
                      value: "monsters",
                    },
                  ],
                },
                {
                  label: "Financieel",
                  teams: [
                    {
                      label: "Kosten",
                      value: "costs",
                    },
                    {
                      label: "Monsters Inc.",
                      value: "monsters",
                    },
                  ],
                },
              ]}
            />
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Verstuur
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          We reageren zo snel mogelijk.{" "}
          <strong>Op werkdagen is dit meestal binnen 24 uur.</strong>
        </p>
      </div>
    </section>
  )
}
