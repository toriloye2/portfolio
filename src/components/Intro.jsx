import React from 'react';

function Intro() {
   return (
      <div className="relative">
         {/* Resume Button positioned at the top-right with inline styles */}
         <a
            href="/assets/ORILOYETOYYIBW_techResume - -real.pdf" // Updated the path with your specified resume path
            target="_blank" // Opens the resume in a new tab for viewing
            rel="noopener noreferrer" // Security measure to prevent security risks
            style={{
               position: 'absolute',
               top: '20px',
               right: '20px',
               backgroundColor: '#1D4ED8', // Tailwind's blue-600 color
               color: 'white',
               padding: '8px 16px',
               borderRadius: '9999px', // Makes it fully rounded
               fontSize: '14px', // Smaller text size
               fontWeight: 'bold',
               border: '2px solid #1D4ED8', // Same as background color
               cursor: 'pointer',
               transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
               e.target.style.backgroundColor = 'white';
               e.target.style.color = 'black'; // Turns text black on hover
            }}
            onMouseOut={(e) => {
               e.target.style.backgroundColor = '#1D4ED8';
               e.target.style.color = 'white';
            }}
         >
            MY RESUME
         </a>

         {/* Main Content */}
         <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            {/* Left Section: Text */}
            <div className="flex flex-col items-start text-left md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block md:inline">ORILOYE&nbsp;</span>
            <span className="block md:inline">TOYYIB</span>
            </h1>



               <p className="text-lg md:text-3xl mb-6 font-bold">
                  Full-Stack Web Developer
               </p>
               <p className="text-lg md:text-xl mb-6">
                  I'm a full-stack developer passionate about building efficient and scalable web applications.
                  My journey in coding involves hands-on experience in both frontend and backend development.
                  From planning and designing to deploying and maintaining, I enjoy solving real-world problems with code.
                  <br />
                  I strive to continually improve my skills and share my knowledge with the developer community.
                  Let's build something amazing together!
               </p>

               <div className="flex items-center">
                  <a
                     href="mailto:taiyeolabamiji@gmail.com"
                     className="bg-blue-600 dark:bg-gray-800 dark:text-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black border-2 border-blue-600 dark:border-gray-800 transition-colors duration-300 mr-4"
                  >
                     CONTACT ME
                  </a>

                  <a
                     href="https://www.linkedin.com/in/toriloye2"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-2xl text-gray-700 hover:text-blue-600 dark:hover:text-white mr-4"
                  >
                     <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
                  </a>
                  <a
                     href="https://github.com/toriloye2"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-2xl text-gray-700 hover:text-blue-600 dark:hover:text-white"
                  >
                     <i className="fab fa-github"></i> {/* GitHub Icon */}
                  </a>
               </div>
            </div>

            {/* Right Section: Image */}
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
               <img
                  src="/assets/toyyib.jpg"  // Correct this path if needed
                  alt="Oriloye Toyyib"
                  className="w-72 h-72 object-cover rounded-lg shadow-lg"
               />
            </div>
         </div>
      </div>
   );
}

export default Intro;
