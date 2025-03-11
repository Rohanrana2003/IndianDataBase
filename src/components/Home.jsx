import { useEffect } from "react";
import { bulletPoints, howWorks } from "../utils/constants"
import Faq from "./subComponents/faq"
import { useNavigate } from "react-router"


const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="relative">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white pt-32 md:pt-40 pb-24 md:pb-20 min-h-screen px-4">
        <div className="container mx-auto max-w-6xl flex flex-col-reverse gap-20 md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 md:mb-0 max-sm:text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Access India&apos;s Largest Phone Number Database
            </h1>
            <p className="text-[15px] md:text-lg lg:text-xl mb-8 text-gray-200">
              Get instant access to verified phone numbers across India. Power your business with accurate, up-to-date contact information.
            </p>

            <button onClick={()=>navigate('/shop')}
              className='group px-7 py-3 md:py-4 rounded-md font-medium md:font-semibold bg-white flex justify-center items-center gap-2 max-sm:mx-auto'>
              <span className='text-transparent text-base md:text-[22px] bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-900'> Boost Your Business</span>
              <img className='  group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 w-[18px] md:w-6 pt-1' src='src/assets/boost.png' />
            </button>

            {/* Trust Badges */} 
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden"><img src='src/assets/logo2.png'/></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#F9A334] overflow-hidden"><img src='src/assets/logo5.png'/></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 overflow-hidden"><img src='src/assets/logo1.png'/></div>
                </div>
                <span className="text-sm text-center sm:text-left">Trusted by 300+ Businesses</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="md:w-[45%] lg:w-1/2 flex justify-center w-full mt-2 md:mt-0 px-6">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="bg-blue-100/20 p-4 sm:p-8 rounded-2xl backdrop-blur-lg">
                <div className="bg-gray-300 h-48 sm:h-64 rounded-xl animate-pulse"></div>
              </div>

              <img src="src/assets/hero-main.png" alt="more" className="absolute h-40 sm:h-56 transform -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2" />

              {/* Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-3 sm:p-4 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-900">250K+</h3>
                <p className="text-xs sm:text-sm">Phone Numbers</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-gray-800 p-3 sm:p-4 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-600">Real-time</h3>
                <p className="text-xs sm:text-sm">Data Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className='bg-gray-200'>
        <div className="container mx-auto max-w-6xl py-16 px-4 ">
          <h2 className="text-[33px] sm:text-4xl md:text-5xl font-bold text-[#492385] text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {
              howWorks.map((work) => (
                <div key={work.id} className="flex  flex-col items-center justify-center py-8 px-6">
                  <div className="  w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <img src={work.image} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#492385] ">{work.title}</h3>
                  <p className="text-center text-[14px] text-gray-700">{work.description}</p>
                </div>
              ))
            }


          </div>
        </div>
      </section>


      {/* India Map */}
      <section className=' bg-gradient-to-r from-indigo-900 to-purple-900 text-white '>

        <div className=' md:px-10 py-16 flex items-center justify-center gap-10 lg:gap-32  md:flex-row flex-col '>
          <div>
            <img src='src/assets/india.png' className="drop-shadow-[0px_10px_0px_rgba(0,0,0,0.4)]" />
          </div>

          <div className='max-w-lg pt-6'>
            <h1 className='text-3xl lg:text-4xl mb-6 font-bold text-[#fff] text-center'>Get Your Perfect Indian Phone Number Today!</h1>

            <ul className='ml-5 max-sm:pr-5'>{bulletPoints.map((point) => (

              <div key={point.id}>

                <li className='text-base lg:text-lg flex items-center gap-2 mt-2'>
                  <span className='text-2xl font-semibold text-[#fff]'>✓</span>
                  {point.title}</li>
              </div>
            )
            )}
            </ul>
            <button onClick={()=>navigate('/shop')}
             className='md:ml-5 mt-8 px-7 py-3 rounded-md font-semibold bg-white flex justify-center items-center gap-2 max-sm:mx-auto
              hover:scale-105 transform transition duration-300'>
              <span className='text-transparent text-base md:text-lg bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-900'> Shop Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Faq */}
      <Faq/>

    </div>
  )
}

export default Home