import Logo from '@/tools/Logo'
import ArrowDown from '@/tools/ArrowDown'
import Moon from '@/tools/Moon'
import { useState } from 'react'

import { useTheme } from 'next-themes'

const Header = ({ setFont }) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [fontIndex, setFontIndex] = useState(0)

  const fonts = [
    { fontName: 'Sans Serif', value: 'font-sans' },
    { fontName: 'Sans', value: 'font-serif' },
    { fontName: 'Mono', value: 'font-mono' },
  ]

  const selectFont = (font, index) => {
    setFont(font.value)
    setFontIndex(index)
  }

  return (
    <header className="flex items-center justify-between">
      <Logo />
      <div className="flex">
        <div className="group inline-block relative border-r-[1px] border-solid border-lightGrey pr-6">
          <button className="font-semibold flex items-center">
            <span className="mr-4">{fonts[fontIndex].fontName}</span>
            <ArrowDown />
          </button>
          <ul className="absolute z-10 right-0 top-7 hidden rounded-2xl shadow-[0_5px_30px__#979797] dark:shadow-[0_5px_30px_#A445ED] w-40 p-6 pb-2 bg-white dark:bg-lightBlack group-hover:block">
            {fonts.map((font, index) => (
              <li
                key={font.value}
                onClick={() => selectFont(font, index)}
                className={`cursor-pointer w- hover:text-purple mb-4 ${font.value}`}
              >
                {font.fontName}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <label
            onClick={() =>
              theme == 'dark' ? setTheme('light') : setTheme('dark')
            }
            className="relative ml-6 mr-3 flex justify-between items-center p-[3px]"
          >
            <input
              type="checkbox"
              className="peer cursor-pointer absolute left-0 top-0 w-full h-full appearance-none"
              defaultChecked={theme === 'dark'}
            />
            <span className="w-10 h-5 cursor-pointer p-[3px] bg-gray-200 rounded-full bg-grey flex flex-shrink-0 items-center after:bg-white after:w-3.5 after:h-3.5 after:rounded-full peer-checked:bg-purple peer-checked:after:translate-x-5 ease-in-out duration-300 after:duration-300"></span>
          </label>
          <Moon />
        </div>
      </div>
    </header>
  )
}

export default Header
