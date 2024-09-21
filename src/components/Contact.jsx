import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto w-full max-w-7xl"> {/* Full width with max width constraint */}
         <div className="flex justify-center items-center mt-12"> {/* Added top margin */}
            <div className="bg-white dark:bg-stone-800 p-8 rounded-lg shadow-md w-full"> {/* Full width form box */}
               <form
                  action="https://getform.io/f/broleopa"
                  method="POST"
                  className="flex flex-col w-full"
               >
                  <Title>Contact</Title>

                  {/* Name and Email side by side */}
                  <div className="flex flex-col md:flex-row gap-4 w-full mb-6"> {/* Increased margin at the bottom */}
                     <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-4 bg-transparent border-2 rounded-md focus:outline-none w-full md:w-1/2"
                     />
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-4 bg-transparent border-2 rounded-md focus:outline-none w-full md:w-1/2"
                     />
                  </div>

                  {/* Message Textarea */}
                  <textarea
                     name="message"
                     placeholder="Message"
                     rows="10"
                     className="p-4 bg-transparent border-2 rounded-md focus:outline-none mb-4 w-full"
                  />

                  {/* Submit Button */}
                  <button
                     type="submit"
                     className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:text-white hover:shadow-lg"
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
