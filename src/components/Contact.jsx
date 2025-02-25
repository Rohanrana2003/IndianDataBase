
const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900 relative top-10 bg-cover bg-center flex items-center justify-center'>
            <div className='bg-black bg-opacity-50 text-white p-4 md:p-8 rounded-lg'>
                <h1 className='text-3xl md:text-5xl font-bold'>Why Us</h1>
                <p className='text-lg md:text-2xl mt-4'>We are the best in the business. Here are some reasons why:</p>
                <ul className='list-disc list-inside mt-4'>
                    <li className='text-lg md:text-2xl'>We have the best data plans</li>
                    <li className='text-lg md:text-2xl'>Our data is the cheapest</li>
                    <li className='text-lg md:text-2xl'>We have the best customer service</li>
                    <li className='text-lg md:text-2xl'>We have the best coverage</li>
                </ul>
            </div>
            
        </div>
  )
}

export default Contact