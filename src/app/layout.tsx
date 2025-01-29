import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Basic ecommerce app built with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.ENABLE_REACT_SCAN === "true" && (
          <script
            src="https://unpkg.com/react-scan/dist/auto.global.js"
            async
          />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={"antialiased h-screen w-screen bg-gray-200"}>
        {children}
      </body>
    </html>
  )
}
