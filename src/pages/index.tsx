import Head from 'next/head';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
// import Dez from '../../public/images/dez.JPG';



export default function Home() {
  return (
    <div className='lg:mx-[90px]'>
      <Head>
        <title>Desmond Fon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className='flex justify-between items-center mt-[55px] gap-[130px]'>

        <div className='w-[520px]'>
          <h1 className='font-sora text-[52px] leading-[74px] text-lightGray font-bold'>Hello! I'm Desmond, a web developer</h1>
          <p className='mt-[12px] font-sora text-[16px] leading-[26px] text-lightGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, iure quae quaerat laudantium ratione quidem praesentium vel saepe, nemo blanditiis libero doloribus animi quod, temporibus facilis et at mollitia laboriosam.</p>
          <Link href='/aboutMe' className='flex items-center mt-[12px] font-mulish text-[16px] leading-[36px] text-lightBlue'><p>More about me  </p><svg className="w-6 h-6" fill="lightBlue" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <path d="M181.65674,133.65723l-80,80A8.0001,8.0001,0,0,1,88,208V48a8.0001,8.0001,0,0,1,13.65674-5.65723l80,80A8.00034,8.00034,0,0,1,181.65674,133.65723Z"/>
</svg></Link>
        </div>


        <div className='w-[482px] h-[643px]'>
          <Image src='/../public/images/dez.JPG' alt='' width={100} height={100} className='rounded-b-full w-full h-full object-cover' />
        </div>

      </div>
    </div>
  )
}
