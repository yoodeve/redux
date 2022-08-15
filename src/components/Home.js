import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createBucket } from '../redux/modules/bucket'

const Home = () => {
  const list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }
  const addBucketList = () => {
      dispatch(createBucket(text))
  }

  return (
    <div>
      <h2>bucket list</h2>
      <ul>
        {list.map((li) => {
          return <li>{li}</li>;
        })}
      </ul>
      <input onChange={onChange} value={text}></input>
      <button onClick={addBucketList}>추가</button>
    </div>
  );
};

export default Home;
