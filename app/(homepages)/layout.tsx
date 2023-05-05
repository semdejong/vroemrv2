import React from "react"

import { SiteHeader } from "@/components/site-header"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
    </div>
  )
}
