import LinkWiki from '@/tools/LinkWiki'

const Footer = ({ url }) => {
  return (
    <footer
      className="text-bodyS mt-6 sm:mt-10 mb-24 sm:mb-32 border-t-[1px] border-solid leading-none
                border-darkGrey flex flex-col sm:flex-row"
    >
      <p className="text-grey underline sm:no-underline lg:underline mt-6 sm:mr-6 lg:mr-5">
        Source
      </p>
      <a
        className="mt-2 sm:mt-6 flex underline sm:no-underline lg:underline cursor-pointer"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
        <LinkWiki className="ml-2 lg:ml-3.5" />
      </a>
    </footer>
  )
}

export default Footer
