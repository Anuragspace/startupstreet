const Choose = () => {
  return (
    <>
        <div className='flex items-center h-[100vh] justify-center overflow-x-hidden overflow-y-hidden relative'>
        <div className="md:h-[80vh] h-[60vh] md:w-[80vw] m-[4vh] md:m-[10vh] rounded-2xl flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-blur-md">
            <h1 className="text-white text-center text-[2rem] md:text-[4rem] m-[2vh]">Choose your <span className="text-primary font-Goldman">Preference</span></h1>
            <div className="grid grid-cols-1 mx-16 my-[2vh] text-center">
                <div className="border-primary text-white border-2 px-12 py-6 text-base rounded-[1rem] mt-12 md:hover:text-[2rem] md:hover:p-8 duration-300 font-Goldman md:w-[30vw] hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border-0"><a href="/ss9/solo.html">Go Solo</a></div>
                <div className="border-primary text-white border-2 px-12 py-6 text-base rounded-[1rem] mt-12 md:hover:text-[2rem] md:hover:p-8 duration-300 font-Goldman md:w-[30vw] hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border-0"><a href="/ss9/team.html">Teamplay</a></div>
            </div>
        </div>
        <div className='md:block h-[20rem] w-[20rem] bg-secondary rounded-full blur-[100rem] absolute -z-10 -right-48 bottom-48'></div>
        <div className='hidden md:block h-[20rem] w-[20rem] bg-secondary rounded-full blur-[100rem] absolute -z-10 -left-48 top-48'></div>
        </div>
    </>
  )
}

export default Choose