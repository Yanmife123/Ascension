const Title = (props) => {
  return (
    <div className="py-2 px-4 text-white font-satoshi font-medium text-sm bg-blurBlack border-1 border-blurWhite rounded-full">
      {props.text}
    </div>
  );
};

export default Title;
