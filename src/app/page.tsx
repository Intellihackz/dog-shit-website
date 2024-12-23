"use client"
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Send, Trash2, Twitter, Copy, Check } from 'lucide-react'

export default function Page() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    const ca = "dogshit-1408.meme-cooking.near"
    await navigator.clipboard.writeText(ca)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white">
      {/* Logo Section */}
      <div className="container mx-auto pt-8 md:pt-12 px-4">
        <div className="relative w-full max-w-2xl mx-auto mb-8 md:mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center bg-gradient-to-b from-[#8B4513] to-[#654321] text-transparent bg-clip-text">
            $DOGSHIT
          </h1>
        </div>

        {/* Icon Navigation */}
        <div className="flex justify-center gap-6 md:gap-8 mb-12 md:mb-24">
          <Link href="https://x.com/hodldogshit" className="text-[#8B4513] hover:text-[#654321] transition-colors">
            <Twitter className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link href="https://t.me/+IvsqmPa3lIkxMWM0" className="text-[#8B4513] hover:text-[#654321] transition-colors">
            <Send className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link href="#" className="text-[#8B4513] hover:text-[#654321] transition-colors">
            <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4 md:space-y-6 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Turning Waste<br />Into Wealth
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Welcome to $DOGSHIT, where we&apos;re transforming the ordinary into extraordinary! Our proud Shiba mascot knows that sometimes the best opportunities are found in unexpected places. Join our community as we redefine value in the crypto space with a dash of humor and a lot of potential!
            </p>
            <Link
              href="https://t.me/+IvsqmPa3lIkxMWM0"
              className="inline-block border-2 border-[#8B4513] text-[#8B4513] px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-[#8B4513] hover:text-white transition-colors text-sm md:text-base"
            >
              JOIN THE MOVEMENT
            </Link>
            <div className="mt-4 bg-[#8B4513]/20 p-3 md:p-4 rounded-lg flex items-center justify-between">
              <code className="text-xs md:text-sm text-[#8B4513] break-all">
                dogshit-1408.meme-cooking.near
              </code>
              <button
                onClick={copyToClipboard}
                className="ml-2 p-2 rounded-full bg-[#8B4513]/20 hover:bg-[#8B4513]/30 transition-colors flex-shrink-0"
                aria-label="Copy contract address"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-[#8B4513]" />}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-b from-[#8B4513]/20 to-transparent rounded-[40px] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jxigjcoUifeLed8qqGu2y9RCd5OJF5.png"
                alt="Proud Shiba Inu character in a nighttime scene"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority
                className="rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Important Links Section */}
      <section className="mt-16 md:mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Join The Revolution</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-2xl mx-auto">
            <Link
              href="https://meme.cooking/meme/1408"
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-[#8B4513] bg-[#1a1a2e] hover:bg-[#8B4513]/10 transition-colors text-sm md:text-base"
            >
              Buy $DOGSHIT
            </Link>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <footer className="mt-16 md:mt-24 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Join Our Community</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <SocialLink href="https://x.com/hodldogshit" icon={<Twitter className="w-5 h-5 md:w-6 md:h-6" />} label="Twitter" />
            <SocialLink href="https://t.me/+IvsqmPa3lIkxMWM0" icon={<Send className="w-5 h-5 md:w-6 md:h-6" />} label="Telegram" />
          </div>
        </div>
      </footer>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center space-y-2 text-[#8B4513] hover:text-[#654321] transition-colors"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#8B4513]/20 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs md:text-sm">{label}</span>
    </Link>
  )
}

