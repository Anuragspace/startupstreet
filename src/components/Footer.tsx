import ss10 from '../assets/ss9g.png';
import insta from '../assets/insta.svg';
import whatsapp from '../assets/whatsapp.svg';
import email from '../assets/email.svg';

const Footer = () => {
  return (
    <>
        <div className=' bg-gradient-to-r from-transparent from-0% via-[#A416C8] via-50% to-transparent to-100% pt-0.5'>
            <div className='h-full w-full bg-black pt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <img src={ss10} alt='logo' className='p-5 md:p-10 h-auto object-contain'></img>
                <div className='grid grid-cols-2 font-Goldman'>
                    <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-10 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                        <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border-0 duration-300'>
                    <a href='#home'>HOME</a>
                        </div>
                    </button>

                    <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-10 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                        <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border-0 duration-300'>
                    <a href='#event'>EVENT</a>
                        </div>
                    </button>

                    <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-10 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                        <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border-0 duration-300'>
                    <a href='#tracks'>TRACKS</a>
                        </div>
                    </button>

                    <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-10 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                        <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border-0 hover:duration-300'>
                    <a href='https://www.csedvit.com/' target='_'>WEBSITE</a>
                        </div>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 text-white text-[1.25rem] md:text-[2rem] text-center m-10 md:m-20 justify-items-center font-Goldman'>
                <div className='mb-5 md:mb-0 flex items-center'>
                    <img src={insta} className='md:w-18 w-12'></img>
                    <a href='https://www.instagram.com/csed.vit/' target='_' className='p-5'>csed.vit</a>
                </div>
                <div className='mb-5 md:mb-0 flex items-center'>
                <img src={whatsapp} className='md:w-18 w-12'></img>
                    <a href='https://whatsapp.com/channel/0029VahiEl0B4hdb9MylqS3Q' target='_' className='p-5'>CSED VIT</a>
                </div>
                <div className='mb-5 md:mb-0 flex items-center'>
                <img src={email} className='md:w-18 w-12'></img>
                    <a href='https://contactcsed.vercel.app/' target='_' className='p-5'>Contact us</a>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer