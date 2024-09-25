import ban from '../assets/banner.svg';

const Banner = () => {
  return (
    <>
        <div className='overflow-x-hidden'>
            <div className='animate-slide flex'>
                <img src={ban}></img>
                <img src={ban}></img>
            </div>
        </div>
    </>
  )
}

export default Banner