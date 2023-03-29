import { useState } from 'react'

import SearchIcon from '@/tools/Search'

const Search = ({ getDefinition }) => {
  const [search, setSearch] = useState('')
  const [searchEmpty, setSearchEmpty] = useState(false)

  const handleChange = (e) => {
    const word = e.target.value
    setSearch(word)

    if (!word.length) {
      setSearchEmpty(true)
      getDefinition(word)

      return
    }

    setSearchEmpty(false)
    getDefinition(word)
  }

  return (
    <div className="mt-12">
      <label className="relative block">
        <SearchIcon
          className="pointer-events-none absolute top-1/2 max-sm:left-[90%] sm:right-5 transform
      -translate-y-1/2"
        />
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => handleChange(e)}
          placeholder="Search for any word…"
          className={`form-input font-bold text-bodyM sm:text-bodyXL bg-lightestGrey dark:bg-lightBlack
                      rounded-2xl py-4 sm:py-5 pl-6 pr-12 appearance-none w-full block
                      focus:outline-none focus:border-[1px] focus:border-solid focus:border-purple ${
                        searchEmpty && 'border-[1px] border-solid border-red'
                      }`}
        />
      </label>
      {searchEmpty && <p className="mt-2 text-red">Whoops, can’t be empty…</p>}
    </div>
  )
}

export default Search
