import PlayWord from './PlayWord'

const Head = ({ word, phonetic, audio }) => (
  <header className="mt-6 flex justify-between">
    <div>
      <h1 className="text-bold text-headingL sm:text-headingXL">{word}</h1>
      <p className="mt-2 text-bodyL sm:text-headingM text-purple">{phonetic}</p>
    </div>
    <PlayWord audio={audio} />
  </header>
)

export default Head
