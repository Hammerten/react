import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

function Update(props) {
  const { handleSubmit, register, errors } = useForm();
  let history = useHistory();
  let location = useLocation();
  const userName = location.state ? location.state.userName : "";
  const [userValue, setUserValue] = useState(userName);
  const [jobValue, setJobValue] = useState("");

  const onSubmit = (data, replace, cb) => {
    props.updateUser(data).then((res) => {
      alert(
        `User: ${res.userName}\nJob: ${res.job}\nUpdated at: ${res.updatedAt}`
      );
      history.push("/");
    });
  };

  return (
    <div className="container mb-3" style={{ padding: "3%", maxWidth: "50%" }}>
      <h3 className="mb-4 text-center">Update User</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            name="userName"
            placeholder="Enter name"
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
            type="text"
            className={`form-control ${errors.userName ? "is-invalid" : ""}`}
            ref={register({
              required: "Required",
            })}
          />
          {errors.userName && (
            <div className="text-danger">{errors.userName.message}</div>
          )}
        </div>
        <div className="form-group">
          <input
            className={`form-control ${errors.job ? "is-invalid" : ""}`}
            placeholder="Enter job"
            value={jobValue}
            onChange={(e) => setJobValue(e.target.value)}
            name="job"
            type="text"
            ref={register({
              required: "Required",
            })}
          />
          {errors.job && (
            <div className="text-danger">{errors.job.message}</div>
          )}
        </div>
        <div className="submit-container mt-4">
          <button type="submit" className="btn btn-primary btn-block">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
