const Title = (props) => {
  return (
    <div className="py-[5px] px-3 text-white font-satoshi font-medium text-sm bg-blurWhiteSecond border-1 border-blurWhite rounded-[16px]">
      {props.text}
    </div>
  );
};

export default Title;
