const Meaning = ({ definitions }) => (
  <ul className="mt-4 sm:mt-6 ml-3 sm:ml-9 text-bodyS sm:text-bodyL list-disc list-outside marker:text-purple">
    {definitions.map(({ definition, example }, index) => (
      <li
        className="mt-3.5 pl-3 text-justify text-lightestBlack dark:text-white"
        key={index}
      >
        {definition}
        {example && <p className="text-grey mt-3">"{example}"</p>}
      </li>
    ))}
  </ul>
)

export default Meaning
