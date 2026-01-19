import React from 'react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            BizConnect
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/directory" className="text-gray-700 hover:text-primary">
              Directory
            </Link>
            <Link href="/register" className="text-gray-700 hover:text-primary">
              Join
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href="/register"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
