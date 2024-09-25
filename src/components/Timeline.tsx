import time from "../assets/timeline.svg";

const Timeline = () => {
  return (
    <>
        <div className='relative  overflow-x-hidden overflow-y-hidden ' id="timeline">
        <h1 className=' text-white text-[2rem] md:text-[4rem] mx-auto mb-6 md:mb-12 text-center font-Goldman '>TIMELINE</h1>
            <div>
            <img src={time} alt='Timeline' className='mx-auto h-[100vh] md:h-[150vh] w-auto object-contain'></img>
            <img src={time} alt='Timeline' className='mx-auto h-[100vh] md:h-[150vh] w-auto object-contain'></img>
            <div className='text-white absolute top-[20vh] md:top-[35vh] xl:ml-[20rem] md:ml-[10rem] ml-[0.8rem] tracking-tighter'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold text-right font-Goldman'>5:00 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Ideathon begins</p>
            </div>
            <div className='text-white absolute right-0 top-[43vh] md:top-[70vh] xl:mr-[20rem] md:mr-[10rem] mr-[0.8rem] tracking-tighter'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold font-Goldman'>6:30 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Speaker session 1</p>
            </div>
            <div className='text-white absolute md:top-[105vh] top-[66vh] xl:ml-[20rem] md:ml-[10rem] ml-[0.8rem] tracking-tighter'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold text-right font-Goldman'>9:00 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Reporting of Participants</p>
            </div>
            <div className='text-white absolute right-0 top-[90vh] md:top-[140vh] xl:mr-[20rem] md:mr-[10rem] mr-[0.8rem] tracking-tighter'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500y text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold font-Goldman'>3:00 AM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Reporting of Participants</p>
            </div>
            <div className='text-white absolute md:top-[185vh] top-[120vh] xl:ml-[20rem] md:ml-[10rem] ml-[0.8rem] tracking-tighter'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold text-right font-Goldman'>8:30 AM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Review 1</p>
            </div>
            <div className='text-white absolute right-0 top-[144vh] md:top-[220vh] xl:mr-[20rem] md:mr-[10rem] mr-[0.8rem] tracking-tighter'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold font-Goldman'>9:30 AM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Speaker session 2</p>
            </div>
            <div className='text-white absolute md:top-[255vh] top-[167vh] xl:ml-[20rem] md:ml-[10rem] ml-[0.8rem] tracking-tighter'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold text-right font-Goldman'>11:15 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Pitching starts</p>
            </div>
            <div className='text-white absolute right-0 top-[190vh] md:top-[290vh] xl:mr-[20rem] md:mr-[10rem] mr-[0.8rem] tracking-tighter'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold font-Goldman'>4:15 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Results!!!</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Timeline