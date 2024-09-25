

const Event = () => {
  return (
    <>
    <div className="relative  overflow-x-hidden" id="event">
    <div className='p-10 md:p-40 m-10 md:m-40 bg-white rounded-2xl bg-opacity-5 backdrop-blur-md'>
        <h1 className=' text-white text-[2rem] md:text-[4rem] mx-auto mb-6 md:mb-12 text-center font-Goldman'>EVENT</h1>
        <p className='text-white  text-[1rem] md:text-[2rem]'><span className="font-Goldman text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-[1.5rem] md:text-[3rem]">Startup Street 9.0</span> , organized by CSED as part of graVITas 2024 at VIT Vellore, is a dynamic platform for aspiring entrepreneurs and startups to showcase their innovative products and ideas. The event provides opportunities for networking with industry leaders, investors, and potential partners. It includes pitch sessions, exhibitions, and mentoring by experts in various fields. Startup Street 9.0 serves as a bridge between students and the startup ecosystem, empowering participants to turn their entrepreneurial dreams into reality.
        </p>
    </div>
    <div className='hidden md:block h-[20rem] w-[20rem] bg-secondary rounded-full blur-[100rem] absolute -z-10 -right-48 bottom-48'></div>
    </div>
    </>
  )
}

export default Event