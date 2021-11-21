import "./Background.css";
const Background = (props) => {
  return (
    <div>
      <div className="background">{props.children}</div>
      <div className="blue-background"></div>
    </div>
  );
};

export default Background;
