import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Job() {
  const stateJob = useSelector((state) => {
    return state;
  });
  const dispatch=useDispatch()
  const addJob=()=>{
    dispatch(
        {
            type:"ADD",
            payload:
        }
    )
  }
  return (
    <div>
      Job
      {stateJob.reducersJob.map((job: any) => {
        return <li>{job.name}</li>;
      })}
    </div>
  );
}
