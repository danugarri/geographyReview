import React, { useState, useEffect } from "react";
import './CountryCapitalGame.css'


const data ={
  España:'Madrid',
  Irlanda: 'Dublin',
  Francia: 'París'
}

  const  CountryCapitalGame = () => {
   
  const newArray = [];
  Object.entries(data).forEach((country) => {
    newArray.push(country[0], country[1]);
  });
  const [buttonList, setButtonList] = useState(shuffleArray(newArray));

  const [comparative1, setComparative1] = useState(null);
  const [comparative2, setComparative2] = useState(null);

  const [notMatched1, setNotMatched1] = useState(null);
  const [notMatched2, setNotMatched2] = useState(null);

  const compareTexts = (buttonName, i) => {
    // Check if its the same button
    if (buttonList[comparative1] !== buttonName) {
      if (
        (notMatched1 === 0 || notMatched1) &&
        (notMatched2 === 0 || notMatched2)
      ) {
        setNotMatched1(null);
        setNotMatched2(null);
      }
      if (
        (comparative1 || comparative1 === 0) &&
        !comparative2 &&
        comparative2 !== 0
      ) {
        setComparative2(i);
      } else if (
        !comparative1 &&
        comparative1 !== 0 &&
        !comparative2 &&
        comparative2 !== 0
      ) {
        setComparative1(i);
      } else {
        setComparative1(null);
        setComparative2(null);
      }
    }
  };

  useEffect(() => {
    // Compare two Numbers

    if (
      (comparative1 === 0 || comparative1) &&
      (comparative2 === 0 || comparative2)
    ) {
      if (
        Object.values(data).indexOf(buttonList[comparative1]) > -1 &&
        data[buttonList[comparative2]] === buttonList[comparative1]
      ) {
        // They Match, delete them from array
        let newArray = [...buttonList].filter(
          (elem) => elem !== buttonList[comparative2]
        );
        newArray = [...newArray].filter(
          (elem) => elem !== buttonList[comparative1]
        );
        setComparative1(null);
        setComparative2(null);
        setButtonList(newArray);
      } else if (
        Object.values(data).indexOf(buttonList[comparative2]) > -1 &&
        data[buttonList[comparative1]] === buttonList[comparative2]
      ) {
        // They Match, delete them from array
        let newArray = [...buttonList].filter(
          (elem) => elem !== buttonList[comparative2]
        );
        newArray = [...newArray].filter(
          (elem) => elem !== buttonList[comparative1]
        );
        setComparative1(null);
        setComparative2(null);
        setButtonList(newArray);
      } else {
        // They do not match
        setNotMatched1(comparative1);
        setNotMatched2(comparative2);
        setComparative1(null);
        setComparative2(null);
      }
    }
  }, [comparative1, comparative2,buttonList]);

  const buttons = buttonList.map((btn, i) => {
    return (
      <button
        style={{
          backgroundColor: `${
            i === comparative1 || i === comparative2
              ? "#0000ff"
              : i === notMatched1 || i === notMatched2
              ? "#ff0000"
              : "#FFF"
          } `,
          margin: "0.5rem",
        }}
        onClick={() => compareTexts(btn, i)}
      >
        {btn}
      </button>
    );
  });

  

  return (
    <div>
      {buttonList.length ? buttons :
      <div>
        <h1  >Enhorabuena!!</h1>
       </div>
      }
      </div>
  );
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
  
};


export default CountryCapitalGame