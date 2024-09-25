

const Tracks = () => {
  return (
    <>  
    <div className="relative overflow-x-hidden overflow-y-hidden" id="tracks">

        <div className='p-10 md:p-40 mx-10 md:mx-40 bg-white bg-opacity-5 rounded-2xl backdrop-blur-md'>
        <h1  className='text-white  text-[2rem] md:text-[4rem] text-center mb-12 font-Goldman'>TRACKS</h1>
        <div className='grid grid-cols-2'>
            <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-20 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center'>
                    Open
                </div>
            </button>
            <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-20 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center'>
                    Open
                </div>
            </button>
            <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-20 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center'>
                    Open
                </div>
            </button>
            <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-20 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center'>
                    Open
                </div>
            </button>
            <div className=' md:h-[20rem] md:w-[20rem] h-[20rem] w-[8rem] bg-secondary rounded-full blur-[1000rem] absolute -z-10 md:-left-64 md:top-48 top-6 -left-6'></div>
            <div className='hidden md:block h-[16rem] w-[16rem] bg-secondary rounded-full blur-[100rem] absolute -z-10 -right-64 top-48'></div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Tracks