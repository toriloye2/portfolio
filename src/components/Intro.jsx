import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-start flex-col md:flex-row text-left p-6">
         <img
            src="/assets/toymage.jpg"
            alt="Oriloye Toyyib"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
         />
         <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl dark:text-white mb-1 font-bold">
               Oriloye Toyyib
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
               Full-Stack Web Developer
            </p>
            <p className="text-lg max-w-xl mb-6 font-bold">
               I'm a full-stack developer passionate about building efficient and scalable web applications.
               My journey in coding involves hands-on experience in both frontend and backend development.
               From planning and designing to deploying and maintaining, I enjoy solving real-world problems with code.
               <br />
               I strive to continually improve my skills and share my knowledge with the developer community.
               Let's build something amazing together!
            </p>
         </div>
      </div>
   );
}

export default Intro;
