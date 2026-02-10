function Title({ children, id }) {
   return (
      <h2
         id={id}
         className="text-3xl font-bold underline-offset-8 decoration-4 mb-6 text-stone-900 dark:text-white"
      >
         {children}
      </h2>
   )
}

export default Title;