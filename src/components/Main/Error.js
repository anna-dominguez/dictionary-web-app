const Error = ({ title, message }) => (
  <main className="mt-32 text-center mx-auto">
    <div className="text-[64px] h-fit">😕</div>
    <h1 className="mt-10 text-grey dark:text-white text-headingS font-bold">
      {title}
    </h1>
    <p className="mt-6 text-grey">{message}</p>
  </main>
)

export default Error
