import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: "Dog Shit",
  description:
    "A community-driven project aiming to turn waste into profit. Join the movement and be part of the revolution!",
  keywords: ["dog shit", "nft", "near", "community", "movement"],
  creator: "ZephyrDev",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jxigjcoUifeLed8qqGu2y9RCd5OJF5.png",
  },
  openGraph: {
    title: "Dog Shit",
    description:
      "A community-driven project aiming to turn waste into profit. Join the movement and be part of the revolution!",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jxigjcoUifeLed8qqGu2y9RCd5OJF5.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Dog Shit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Shit",
    description:
      "A community-driven project aiming to turn waste into profit. Join the movement and be part of the revolution!",
    creator: "@zephyrdev_",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jxigjcoUifeLed8qqGu2y9RCd5OJF5.png"],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
