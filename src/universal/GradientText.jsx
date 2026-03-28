const GradientText = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-[#41AEF7] to-[#F54387] bg-clip-text text-transparent font-bold">
      {text}
    </span>
  );
};

export default GradientText;
