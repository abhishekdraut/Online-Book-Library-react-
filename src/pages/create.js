import { useState } from "react";
function CaretePage() {
  const [bookname, setbookname] = useState("");
  const bookName = JSON.stringify({ name: bookname, favSubject: "react" });

  //   async function uploadValue(e) {
  //     e.preventDefault();

  //     const responce = await fetch("https://iifsd.herokuapp.com/students", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: bookName,
  //     });
  function uploadValue(e) {
    e.preventDefault();
    const responce=fetch("https://iifsd.herokuapp.com/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bookName,
    })
    

    const data1=responce.json();
    console.log(data1)
  }

  return (
    <div className="PageCrate">
      <h1 className="CraatePageHeading">Create Book</h1>
      <form onSubmit={uploadValue}>
        <input
          type="text"
          placeholder="Enter the name of book"
          onChange={(e) => {
            setbookname(e.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default CaretePage;
