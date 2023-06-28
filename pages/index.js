import Image from 'next/image'
import {Inter} from 'next/font/google'
import hero_bg from 'public/bg_crowley.jpg'
import bg from 'public/crowley_bg_landing.jpg'
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import Link from "next/link";
import {useState} from "react";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const links = [
    {
      id: 1,
      text: 'the.crowley.official',
      link: '/',
      icon: ''
    }
  ]

  const [glitch, setGlitch] = useState('')


  // const Over = () => {
  //   setGlitch('hero_link glitch-hover layers-hover')
  // }
  // const Leave = () => {
  //   setGlitch('')
  // }

  return (
    <main
      className={`w-full overflow-hidden  mx-auto flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} relative`}
    >
      <div
        className={'w-full h-full  absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10'}
      ></div>
      <Image
        src={bg}
        alt={'bg'}
        fill
        className={'w-full h-full object-cover blur-[2px]'}
      />
      <div className="z-20 -translate-y-1/2 overflow-hidden">
        <div className={'flex flex-col '}>
          <h2 className="hero_1 glitch layers text-start top-4 px-12  md:text-md" data-text={'The'}><span>The</span></h2>
          <h2 className="hero glitch layers" data-text="Crowley"><span>Crowley</span></h2>
        </div>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 z-20'}>
        <Link
          href={'https://www.instagram.com/the.crowley.official'}
          target={'_blank'}
          className={'links flex items-center gap-x-4 rounded-lg p-2'}
        >
          <FaInstagram size={20} color={'white'}/>
          <div className={'hero_link glitch-hover layers-hover'} data-text={'the.crowley.official'}>
            <span
            >the.crowley.official</span>
          </div>
        </Link>
        <Link href={'https://www.facebook.com/the.crowley.official'}
              target={'_blank'}
              className={'flex items-center gap-x-4 links rounded-lg p-2'}>
          <FaFacebook size={20} color={'white'}/>
          <div className={'hero_link glitch-hover layers-hover '} data-text={'the.crowley.official'}><span>the.crowley.official</span></div>
        </Link>
        <Link href={'https://www.tiktok.com/@the.crowley.official'} target={'_blank'} className={'flex items-center gap-x-4 links rounded-lg p-2'}>
          <FaTiktok size={20} color={'white'}/>
          <div className={'hero_link glitch-hover layers-hover'} data-text={'@the.crowley.official'}><span>@the.crowley.official</span></div>
        </Link>
        <Link href={'https://www.youtube.com/@the.crowley.official'} target={'_blank'} className={'flex items-center gap-x-4 links rounded-lg p-2'}>
          <FaYoutube size={20} color={'white'}/>
          <div className={'hero_link glitch-hover layers-hover'} data-text={'@the.crowley.official'}><span>@the.crowley.official</span></div>
        </Link>
      </div>
    </main>
  )
}
