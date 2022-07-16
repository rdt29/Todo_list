import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const List = (props) => {
  useEffect(()=>{
    gsap.to(".cross", {
      opacity:1,
      duration:2,
    })
    gsap.to(".submit" , {
      rotate:360,
      duration:1.1,
    })
  })
  return (
    <div className="cross">
      <i>
        <button
          onClick={()=>{props.del(props.i)}}
          className="submit"
          // value={elem}
          key={props.i}
          id="delete"
        >
          +
        </button>
      </i>
      <ol id={props.i}>{props.data}</ol>
    </div>
  );
};

export default List;
