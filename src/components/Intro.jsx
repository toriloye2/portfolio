import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Oriloye Toyyib</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Full-Stack Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a full-stack developer passionate about building efficient and scalable web applications.
            My journey in coding involves hands-on experience in both frontend and backend development.
            From planning and designing to deploying and maintaining, I enjoy solving real-world problems with code.
            <br />
            I strive to continually improve my skills and share my knowledge with the developer community.
            Let's build something amazing together!
         </p>
      </div>
   )
}

export default Intro;
