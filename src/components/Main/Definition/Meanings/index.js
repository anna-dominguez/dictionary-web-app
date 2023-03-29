import Synonyms from './Synonyms'
import Meaning from './Meaning'

const Meanings = ({ meanings }) => {
  return meanings.map(({ partOfSpeech, definitions, synonyms }, index) => (
    <section key={partOfSpeech + index}>
      <h2
        className="overflow-hidden text-lightestBlack dark:text-white italic text-bodyL sm:text-headingM mt-8 sm:mt-10
                     after:bg-darkGrey after:content-[''] after:inline-block after:h-[1px] after:relative
                     after:align-middle after:w-full after:-mr-[50%] after:left-4"
      >
        {partOfSpeech}
      </h2>
      <h3 className="mt-8 sm:mt-11 text-bodyM sm:text-headingS text-grey">
        Meaning
      </h3>
      <Meaning definitions={definitions} />
      {index === 0 && <Synonyms synonyms={synonyms} />}
    </section>
  ))
}

export default Meanings
