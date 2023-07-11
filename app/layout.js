import './globals.css'
import { Inter } from 'next/font/google'
import { AppContextProvider } from './context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sanket Movies',
  description: 'Generated by Love',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>

    </html>
  )
}
