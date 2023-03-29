import { useState } from 'react'
import Header from '@/components/Header'
import Main from '@/components/Main'

const Home = () => {
  const [font, setFont] = useState('font-sans')

  return (
    <div
      className={`${font} w-screen grid px-6 sm:px-10 lg:px-[20%] mt-6 sm:mt-14 content-start`}
    >
      <Header setFont={setFont} />
      <Main />
    </div>
  )
}

export default Home
