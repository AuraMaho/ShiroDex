import React from "react";
const{useState} = React;

const Searchbar = () => {
  let search = "";

  const onChange = (evt)=>{
    console.log(evt.target.value);
    search = evt.target.value;
  }

  return (
    <div>
      <div>
        <input placeholder = "Buscar Pokemon..." 
        onChange= {onChange}
        />
        
      </div>
      <div> {search} </div>
      </div>
  );
};

export default Searchbar;
