import React, { useState } from "react";

const Record = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [data, setData] = useState([]);
  const addData = (e) => {
    e.preventDefault();
    setData([...data, { name: form.name, email: form.email }]);
    setForm({ name: "", email: "" });
  };

  const removeData=(i)=>{
    console.log("-<", i);
    let arr = data
    console.log("arr", arr);
    arr.splice(i, 1)
    console.log("new", arr);
    setData([...arr])

  }

  return (
    <>
      <div className="record-keeper-parent">
        <div className="header">Record Keeper</div>
        <div className="content">
          <form action="" onSubmit={addData}>
            <div className="flex justify-between w-1/2">
              <input
                type="text"
                value={form.name}
                className="text-black border-black border-2"
                onChange={(e) => {
                  console.log(e.target.value);
                  setForm({ ...form, name: e.target.value });
                }}
                placeholder="Type name here"
              />
              <input
                type="text"
                value={form.email}
                className="text-black border-black border-2"
                onChange={(e) => {
                  console.log(e.target.value);
                  setForm({ ...form, email: e.target.value });
                }}
                placeholder="Type email here"
              />
              <button className="bg-green-900 text-white px-6 py-2 rounded-lg">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col ">
          <div className="header flex justify-between w-1/2">
            <h1>Name</h1>
            <h1>Email</h1>
            <h1>Remove</h1>
          </div>
          {data.length > 0
            ? data.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="div flex flex justify-between w-1/2 my-4"
                  >
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <button className="bg-red-700 text-white px-6 py-2" onClick={()=>{removeData(i)}}>
                      Delete
                    </button>
                  </div>
                );
              })
            : "No data found"}
        </div>
      </div>
    </>
  );
};

export default Record;
