//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

var React = require("react");
var ReactDom = require("react-dom");

const date = new Date();
const currentTime = date.getHours();
const fullTime =
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let greeting;

const customStyle = {
  color: "",
  fontSize: "",
  backgroundColor: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
  customStyle.font = "10px";
  customStyle.backgroundColor = "Yellow";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
  customStyle.font = "20px";
  customStyle.backgroundColor = "pink";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
  customStyle.font = "30px";
  customStyle.backgroundColor = "grey";
}

ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {fullTime} {greeting}
  </h1>,
  document.getElementById("root")
);
