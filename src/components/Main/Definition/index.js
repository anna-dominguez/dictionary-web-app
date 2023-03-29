import Meanings from './Meanings'
import Footer from './Footer'
import Head from './Head'

const Definition = ({ data }) => {
  const findPhonetic = () => {
    if (!data) return
    if (data[0]?.phonetic?.length) return data[0].phonetic
    const phonetic = data[0]?.phonetics?.find(
      (phonetic) => phonetic.text?.length
    )
    return phonetic?.text
  }

  const phonetic = findPhonetic()

  const findAudio = () => {
    if (!data) return
    const phonetic = data[0]?.phonetics?.find(
      (phonetic) => phonetic.audio?.length
    )
    return phonetic?.audio
  }

  const audio = findAudio()

  console.log(data)
  return (
    <main>
      <Head word={data[0]?.word} phonetic={phonetic} audio={audio} />
      {data[0]?.meanings && <Meanings meanings={data[0].meanings} />}
      <Footer url={data[0]?.sourceUrls[0]} />
    </main>
  )
}

export default Definition
