import beach from "../Images/beach.jpg";
import lake from "../Images/download.jpg";
import waterFall from "../Images/Free-Amazing-Background-Images-Nature.jpg";
import nature from "../Images/Nature.jpg";
import lakeView from "../Images/OIP.jpg";
import sunrise from "../Images/sunrise.jpg";
import sunset from "../Images/sunset.jpg";

let imgs = [beach, lake, waterFall, nature, lakeView, sunrise, sunset];

let res = imgs.map((val, ind) => {
  return (<img src={val} alt="" width={400} height={250} />)
});

function Image() {
  return (<>{res}</>)
}

export default Image;
