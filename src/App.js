import React from "react";
function App() {
  //new Date(year,month,day,hours,minutes,seconds,miiliseconds)
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curDate > 1 && curDate < 12) {
    greeting = "Good morning 🌹";
    cssStyle.color = "#00b894";
  } else if (curDate >= 12 && curDate < 4) {
    greeting = "Good Afternoon 💖";
    cssStyle.color = "orange";
  } else if (curDate >= 4 && curDate < 20) {
    greeting = "Good evening 😍";
    cssStyle.color = "gray";
  } else {
    greeting = "Good night 😘";
    cssStyle.color = "black";
  }
  return (
    <>
      <div>
        <h1>
          Hello Reena,<span style={cssStyle}> {greeting}</span>
        </h1>
      </div>
    </>
  );
}
export default App;
