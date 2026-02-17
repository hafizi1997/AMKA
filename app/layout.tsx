import "../public/assets/css/zeena.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { openSans, poppins } from '@/lib/font'
export const metadata = {
    title: 'AMKA Digital Sdn Bhd',
    description: 'Next Js template'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
            <body>{children}</body>
        </html>
    )
}
