


const Whyus = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900'>


      <section className=" py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="flex flex-col items-center justify-center bg-white text-gray-800 py-8 px-6 rounded-xl shadow-lg">

              <div className="bg-gray-300 w-20 h-20 rounded-full flex items-center justify-center mb-6">

                <img src="src/assets/why-1.png" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accurate Data</h3>
              <p className="text-center text-sm">Our database is constantly updated and verified to ensure maximum accuracy and reliability for your business needs.</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white text-gray-800 py-8 px-6 rounded-xl shadow-lg">
              <div className="bg-gray-300 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <img src="src/assets/why-2.png" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Support</h3>
              <p className="text-center text-sm">Our dedicated team provides 24/7 support to assist with any queries or issues, ensuring seamless access to our database.</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white text-gray-800 py-8 px-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <img src="src/assets/why-3.png" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Security</h3>
              <p className="text-center text-sm">We employ robust encryption and security measures to safeguard our database and protect your sensitive information.</p>
            </div>

          </div>
        </div>

      </section>

    </div>
  )
}

export default Whyus