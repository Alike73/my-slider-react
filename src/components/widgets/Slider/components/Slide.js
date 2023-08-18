import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

export default function Slide({ data: { url, title } }) {
  return (
    <div className="slide">
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  );
}


// import React from "react";
// import SlideTitle from "./SlideTitle";
// import SlideImage from "./SlideImage";

// export default function Slide({ data: { url, title }, animation }) {
//   return (
//     <div className={`slide ${animation && 'fadeInAnimation'}`}>
//       <SlideImage src={url} alt={title} />
//       <SlideTitle title={title} />
//     </div>
//   );
// }

