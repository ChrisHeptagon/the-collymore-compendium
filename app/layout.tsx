import Dropdown from '@/components/dropdown'
import { Footer } from 'components/footer'
import { Header } from 'components/header'
import 'public/globals.css'

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <Dropdown/>
      <main>{children}</main>
      <Footer/>
      </body>
    </html>
    )
}

