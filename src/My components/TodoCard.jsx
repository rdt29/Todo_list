import React, { useState } from "react";
import List from "./List";
import gsap from "gsap";
import { useEffect } from "react";


const TodoCard = () => {
  const [seevalue, getvalue] = useState("");

  const LocalStorageData = () => {
    let list = localStorage.getItem("task");
    if (list) {
      return JSON.parse(localStorage.getItem("task"));
    } else {
      return [];
    }
  };

  const [task, gettask] = useState(LocalStorageData());
  // console.log("task: ", task);
  useEffect(() => {
    gsap.to(".submit", {
      rotate: 360,
      duration: 1.1,
    });
  }, []);
  const Input = (elem) => {
    getvalue(elem.target.value);
  };
  const Delete = (elem) => {
    // console.log(elem.target.key);
    // console.log(elem.target.id);
    // console.log(elem);
    window.localStorage.clear(elem);
    gettask((elemall) => {
      return elemall.filter((item, index) => {
        return elem !== index;
      });
    });
  };
  const Submit = () => {
    // debugger
    if (seevalue != "") {
      gettask((elem) => {
        return [...elem, seevalue];
      });
      getvalue("");
    } else {
      alert("task can't be blank");
    }

    // gsap and local storage
  };

  localStorage.setItem("task", JSON.stringify(task));

  return (
    <>
      <div id="main">
        <div id="card">
          <h1>ToDo List</h1>

          <input
            type="text"
            name="todoname"
            id="t"
            value={seevalue}
            onChange={Input}
            placeholder="Your Task "
          />
          <button className="submit" onClick={Submit}>
            +
          </button>
          <div className="task">
            {task.map((elem, index) => {
              return <List data={elem} i={index} del={Delete} />;
            })}
          </div>
        </div>

        <div id="copy">&#169; Rajdeep Tiwari</div>
      </div>
    </>
  );
};

export default TodoCard;
