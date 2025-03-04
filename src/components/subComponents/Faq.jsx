import { faqs } from "../../utils/constants"
import { useState } from "react";


const Faq = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className='min-h-[50vh] bg-[#E5E7EB]'>
    <div className="faq-container max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#492385' }}>
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg transition-all  ease-in duration-300"
            style={{ borderColor: '#49238533' }}
          >
            <button
              className="w-full px-6 py-4 rounded-lg text-left transition-all  ease-in duration-300  flex justify-between items-center bg-[#492385]  text-[15px] sm:text-base"
              style={{ color: '#fff' }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="md:font-semibold">{faq.question}</span>
              <span className="text-xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>

            {activeIndex === index && (
              <div
                className="px-6 py-4 bg-purple-50 rounded-lg transition-all  ease-in duration-300 text-sm sm:text-base"
                style={{ color: '#4a5568' }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Faq