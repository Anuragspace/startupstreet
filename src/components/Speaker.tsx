import tohand from "../assets/spe1.png";
import sahu from "../assets/spe2.png"
import khatri from "../assets/spe3.png"

const Speaker = () => {
    const tile=(ab:string , cd:string ,ef:string)=>{
        return(
            <div className='flex flex-col items-center '>
                <div className='m-20 h-72 w-72 bg-white rounded-2xl bg-opacity-15 backdrop-blur-md'>
                    <div className='-m-4 h-72 w-72 bg-primary rounded-2xl grid items-center justify-center '> <img  src={ef} className="h-72 w-72 object-cover rounded-xl object-top border-4 border-secondary"></img></div>
                </div>
                <h1 className="text-white text-[2rem] font-Goldman">{ab}</h1>
                <h1 className="text-secondary text-[1rem] font-Goldman">{cd}</h1>
            </div>
        )
    }

    return (
      <>      
         <div className="relative overflow-x-hidden ">
        <div className="mb-20">
            <h1 className='text-center text-white text-4xl text-[2rem] md:text-[4rem] m-10 md:m-40 font-Goldman'>SPEAKERS</h1>
            <div className='grid md:grid-cols-3 grid-cols-1'>
                {tile("Rahul Khatri","Founder-AuraX",khatri)}
                {tile("Satyam Sahu","Co-Founder Tohands",tohand)}
                {tile("Sarit Prajna Sahu","Co-Founder napEazy",sahu)}
            </div>
        </div>
        <div className='h-[6rem] w-[6rem] md:h-[20rem] md:w-[20rem] bg-secondary rounded-full blur-[60rem] absolute -z-10 -right-32 bottom-64'></div>
        <div className='h-[6rem] w-[6rem] md:h-[20rem] md:w-[20rem] bg-secondary rounded-full blur-[60rem] absolute -z-10 bottom-64'></div>
            </div>  
      </>
    )
  }
  
  export default Speaker