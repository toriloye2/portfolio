import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto w-full lg:w-10/12"> {/* Adjusted the width to take more space */}
         <div className="flex justify-center items-center mt-12"> {/* Added top margin to separate sections */}
            <div className="bg-white dark:bg-stone-800 p-8 rounded-lg shadow-md w-full"> {/* Box style */}
               <form
                  action="https://getform.io/f/broleopa"
                  method="POST"
                  className="flex flex-col w-full"
               >
                  <Title>Contact</Title>
                  <input
                     type="text"
                     name="name"
                     placeholder="Name"
                     className="p-4 bg-transparent border-2 rounded-md focus:outline-none mb-4"
                  />
                  <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     className="p-4 bg-transparent border-2 rounded-md focus:outline-none mb-4"
                  />
                  <textarea
                     name="message"
                     placeholder="Message"
                     rows="10"
                     className="p-4 bg-transparent border-2 rounded-md focus:outline-none mb-4"
                  />
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
