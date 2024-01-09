import './styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pranav Vyas',
  description: 'Software Engineer with specialization in MERN stack',
  keywords: ["Pranav", "Vyas", "Portfolio", "Developer", "MERN", "Software Engineer", "Python", "JavaScript", "Reactjs", "Node", "Accenture"],
  openGraph: {
    title: 'Pranav Vyas',
    description: 'Software Engineer with specialization in MERN stack',
    keywords: ["Pranav", "Vyas", "Portfolio", "Developer", "MERN", "Software Engineer", "Python", "JavaScript", "Reactjs", "Node", "Accenture"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
