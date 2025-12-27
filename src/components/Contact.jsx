import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto w-full max-w-7xl">
         <div className="flex justify-center items-center mt-12">
            <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg w-full">
               <form
                  action="https://getform.io/f/broleopa"
                  method="POST"
                  className="flex flex-col w-full"
               >
                  <Title>Contact</Title>

                  {/* Name and Email side by side */}
                  <div className="flex flex-col md:flex-row gap-4 w-full mb-6">
                     <div className="w-full md:w-1/2">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           placeholder="Name"
                           required
                           className="p-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 w-full transition-all duration-200"
                        />
                     </div>
                     <div className="w-full md:w-1/2">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           placeholder="Email"
                           required
                           className="p-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 w-full transition-all duration-200"
                        />
                     </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-6">
                     <label htmlFor="message" className="sr-only">Message</label>
                     <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="8"
                        required
                        className="p-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 w-full transition-all duration-200 resize-none"
                     />
                  </div>

                  {/* Submit Button */}
                  <button
                     type="submit"
                     className="px-8 py-3 w-max text-base font-semibold rounded-lg text-white bg-gradient-to-r from-yellow-500 to-pink-500 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                     Work With Me
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Contact;
