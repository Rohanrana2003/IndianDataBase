


const Home = () => {

  return (
    <div className="relative">
     
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white pt-32 md:pt-40 pb-16 md:pb-32 min-h-screen px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 max-sm:text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Access India&apos;s Largest Phone Number Database
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-200">
              Get instant access to verified phone numbers across India. Power your business with accurate, up-to-date contact information.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-400"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-400"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-400"></div>
                </div>
                <span className="text-sm text-center sm:text-left">Trusted by 10,000+ Businesses</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="md:w-[45%] lg:w-1/2 flex justify-center w-full mt-12 md:mt-0 px-6">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="bg-blue-100/20 p-4 sm:p-8 rounded-2xl backdrop-blur-lg">
                <div className="bg-gray-300 h-48 sm:h-64 rounded-xl animate-pulse"></div>
              </div>
              
              <img src="src/assets/hero-main.png" alt="more" className="absolute h-40 sm:h-56 transform -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2"/>

              {/* Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-3 sm:p-4 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">250M+</h3>
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
    </div>
  )
}

export default Home