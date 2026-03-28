const Button = ({title, className}) => {
  return (
    <button className={`bg-primary text-white px-6 py-2 rounded-xl cursor-pointer w-fit focus:outline-none ${className}`}>
        {title}
      </button>
  )
}

export default Button