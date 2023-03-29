const Synonyms = ({ synonyms }) => {
  if (synonyms[0]?.length)
    return (
      <h3 className="mt-6 sm:mt-10 text-grey text-bodyM sm:text-headingS">
        Synonyms{' '}
        <span className="ml-6 sm:ml-10 text-purple hover:underline cursor-pointer font-bold">
          {synonyms.join(', ')}
        </span>
      </h3>
    )
}

export default Synonyms
