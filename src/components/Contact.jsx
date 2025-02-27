
const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative ">

    <div className='w-full h-72 bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center'>
      <h1 className="text-white mt-12 text-4xl md:text-6xl font-bold">Contact Us</h1>
    </div>
      <div className="container px-5 py-16  lg:pl-16 mx-auto flex flex-col-reverse md:flex-row md:gap-10 lg:gap-0 ">
        <div className=" min-h-72 md:w-1/2  bg-gray-200 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.9508266375624!2d76.72449602176576!3d30.67783837610726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c4dcef745%3A0xce160da1e4c30e8f!2sYouNedia!5e0!3m2!1sen!2sin!4v1740633304427!5m2!1sen!2sin" style={{filter: 'grayscale(1) '}}></iframe>

          <div className="bg-white max-md:hidden relative z-40 max-md:-bottom-32 flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">721, 7th Floor, Zone 3, Unity Homeland, CP 67, Sector 67, Mohali, Punjab 160062</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-purple-500 leading-relaxed">info@younedia.in</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+91 82530000323</p>
            </div>
          </div>
        </div>
        <div className="mx-auto lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-0 md:mt-0">
          <h2 className="text-gray-800 text-3xl md:text-4xl mb-4 font-medium title-font">Have any query?</h2>
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700">Name</label>
            <input type="text" id="name" name="name"  placeholder="Your Name"
            className="w-full bg-gray-200 rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email"
              className="w-full bg-gray-200 rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-700">Message</label>
            <textarea id="message" name="message" placeholder="Your Message Here..."
              className="w-full bg-gray-200 rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white mb-10 bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
        </div>
      </div>
    </section>
    )
}

export default Contact