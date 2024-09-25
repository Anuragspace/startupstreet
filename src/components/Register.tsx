// import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>

     <div className='flex justify-center relative'>
     {/* <button className='border-primary text-white border-2 px-12 py-6 text-base rounded-[1rem] mt-12 md:hover:text-[2rem] md:hover:p-8 duration-300 font-Goldman hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border-0'>
       <Link to='/ss9/register'>Register Now!!</Link>
     </button> */}
     <button className='border-primary text-white border-2 px-12 py-6 text-base rounded-[1rem] mt-12 md:hover:text-[2rem] md:hover:p-8 duration-300 font-Goldman hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border-0'>
       <a href='https://www.csedvit.com/startupstreet9.0/'>Register Now!!</a>
     </button>
     <div className='h-[20rem] w-[20rem] bg-secondary rounded-full blur-[100rem] absolute -z-10 -left-48'></div>
     </div>
    </>
  )
}

export default Register