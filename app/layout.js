import './globals.css'

export const metadata = {
  title: 'Shubham Yadav | AI/ML Engineer',
  description: 'AI/ML Engineer with expertise in LLMs, OCR, and scalable ML systems. Building the future with PyTorch, TensorFlow, and modern web technologies.',
  keywords: ['AI Engineer', 'ML Engineer', 'Full Stack', 'LLMs', 'Next.js', 'PyTorch'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0a0a0f] text-slate-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
