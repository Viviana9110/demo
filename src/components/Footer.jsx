import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-four text-white pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logoFooter} alt="logo" className='w-40' />
                    <p className='text-sm'>
                    Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                    </p>
                    <div className='flex items-center gap-3 mt-4 text-white'>
                        <img src={assets.instagramIcon} alt="instagram-icon" className='w-6'/>
                        <img src={assets.facebookIcon} alt="facebook-icon" className='w-6'/>
                        <img src={assets.twitterIcon} alt="twitter-icon" className='w-6'/>
                        <img src={assets.linkendinIcon} alt="linkedin-icon" className='w-6'/>
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-white'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-white'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Política de Cancelación</a></li>
                        <li><a href="#">Política de Pago</a></li>
                        <li><a href="#">Codigo de Conducta</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p className='items-center'>© {new Date().getFullYear()} Explore Plus. Todos los derechos reservados.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
