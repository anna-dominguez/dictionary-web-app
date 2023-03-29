import Play from '@/tools/Play'

const PlayWord = ({ audio }) => (
  <button onClick={() => new Audio(audio).play()}>
    <Play
      className="w-[48px] sm:w-[75px] cursor-pointer group"
      opacity="opacity-25 group-hover:opacity-100 group-hover:fill-purple"
      fill="fill-purple group-hover:fill-white"
    />
  </button>
)

export default PlayWord
