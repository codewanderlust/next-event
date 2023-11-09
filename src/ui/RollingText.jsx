const RollingText = () => {
  const texts = ["Text 1", "Text 2", "Text 3"];

  return (
    <div className="w-full overflow-hidden">
      <span className=" animate-roll inline-block">
        {texts.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </span>
    </div>
  );
};

export default RollingText;
