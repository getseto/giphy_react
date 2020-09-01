import React from "react";

function Gif(props) {
  return (
    <div>
      <img
        className="gif"
        src={props.gif.images.fixed_width_small.url}
        style={{
          width: `${props.gif.images.fixed_width_small.width}px`,
          height: `${props.gif.images.fixed_width_small.height}px`
        }}
        alt="wow"
      />
    </div>
  );
}

export default Gif;
