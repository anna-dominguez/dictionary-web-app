const Play = ({ className, opacity, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 75 75"
    className={className}
  >
    <g className={fill} fillRule="evenodd">
      <circle cx="37.5" cy="37.5" r="37.5" className={opacity} />
      <path d="M29 27v21l21-10.5z" />
    </g>
  </svg>
)

export default Play
