import { useEffect } from 'react'
import { cardPoints } from '../utils/constants'

const Shop = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <section className="min-h-screen pt-32 py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white ">

      <div className=" mx-auto text-center max-w-6xl flex flex-col items-center justify-center h-full px-3">

        <h2 className='animate-fade-up font-serif text-white text-[21px] md:text-[26px] font-bold mb-4'>Phone Numbers Data Provider</h2>

        <p className='animate-fade-up text-sm md:text-lg mb-10 px-5'>Get a verified and high-quality Indian phone number database for marketing, business leads, and customer outreach. <span className='max-md:hidden'> Boost your sales with authentic and up-to-date mobile number lists.</span></p>

        {/* Main Section */}
        <div className=' flex flex-col md:flex-row justify-center items-center gap-10  lg:gap-48 max-sm:px-5'>

          {/* Database Img */}
          <img className='animate-fade-right w-56 md:w-80 ' src='src/assets/database1.webp' />

          {/* Shop Card */}
          <div className='animate-fade-left shadow-lg pb-10 shadow-black bg-white md:w-[350px] max-w-[350px] rounded-2xl flex flex-col items-start px-6 md:px-10 '>

            <div className='flex items-center justify-center gap-2'>
              <img className='w-10 mt-5 ' src='src/assets/trust.webp' />
              <p className='text-[20px] md:text-[22px] text-[#492385] mx-auto mb-4 pt-8 font-bold'>BEST DEAL FOR YOU!</p>

            </div>

            {/* card points */}
            <div className='ml-3'>
              {
                cardPoints.map(point => (
                  <p key={point.id}
                    className='text-sm flex gap-1 items-start text-[#492385] text-start mb-3'>
                    <img className='w-5 ' src={point.image} />
                    <span>{point.description}</span>
                  </p>
                ))
              }
            </div>

            <a className='w-full '
             href='https://wa.me/+918307893660?text=Hello%20I%20am%20ready%20to%20buy%20your%20database.%20Please%20send%20me%20Payment%20method.' target='_blank'>
              <button
                className="w-full bg-gradient-to-br from-[#79b4fc] to-[#0164D0] text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow-sm shadow-black  mt-6 text-bold text-lg hover:scale-105 transform transition duration-300">
                Buy Before you Regret
              </button>
            </a>



          </div>
        </div>
      </div>

    </section>
  )
}

export default Shop