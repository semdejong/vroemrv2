export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Vroemr",
  description: "Vroemr.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Prijzen",
      href: "/prices",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Over ons",
      href: "/over-ons",
    },
  ],
  links: {
    twitter: "https://twitter.com/vroemr",
    github: "https://github.com/vroemrv2",
    docs: "https://ui.shadcn.com",
    login: "/login",
    register: "/register",
  },
}
