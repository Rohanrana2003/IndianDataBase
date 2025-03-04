import { whyUs } from "../utils/constants"
import Faq from "./subComponents/faq"


const Whyus = () => {

  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900'>


      <section className=" py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              whyUs.map(item => (
                <div key={item.id} className="flex flex-col items-center justify-center bg-white text-gray-800 py-8 px-6 rounded-xl shadow-lg">

                  <div className="bg-gray-300 w-20 h-20 rounded-full flex items-center justify-center mb-6">

                    <img src={item.image} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-center text-sm">{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Faq  */}
     <Faq/>

    </div>
  )
}

export default Whyus