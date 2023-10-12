import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useState } from 'react';

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  // Track whether we are storing first or second number and rotate.
  const [rotateNumber,setRotateNumber] = useState(1);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [operator, setOperator] = useState(null);

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (value) => {  
    if (rotateNumber == 1) {
      setNumber1(value);
      setCurrentNumber(value);
      setRotateNumber(2);
      
    }
    else {
      setNumber2(value);
      setCurrentNumber(value);
      setRotateNumber(1);
    }
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (value) => {
    if (value !== "="){
      setOperator(value);
    }
    
    let answer = null;
    if (value === "=") {
      if (operator == "+"){
        answer = number1 + number2;
      }
      else if (operator === "-") {
        answer = number1 - number2;
      }
      else if (operator === "x"){
        answer = number1 * number2;
      }
      else if (operator === "/"){
        answer = number1 / number2;
      }
      setCurrentNumber(answer);
    }
    else if (value === "clear"){
      setNumber1(null);
      setNumber2(null);
      setOperator(null);
      setCurrentNumber(null);
    }
  };

  return (
    <div style= {{backgroundColor: "#aaaaaa"}}>

      <div 
        style={{

         marginLeft: "auto",
         marginRight: "auto",
         marginBottom: "10px",
         width: "90%"

        }}>
        <div
          style={{ display: "flex",
                flexDirection: "row", 
                 justifyContent: "center",
                }}
        >    
          <Screen value={currentNumber} />
        </div>
   
        <div
          style={{ display: "flex",
          flexDirection: "row",   
          justifyContent: "center",   
          }}
        >
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div
          style={{ display: "flex",
          flexDirection: "row",
          justifyContent: "center"   
          }}
        >
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
        </div>
        <div
          style={{ display: "flex",
          flexDirection: "row",
          justifyContent: "center"    
          }}
        >
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
        </div>
        <div
          style={{ display: "flex",
          flexDirection: "row",   
          justifyContent: "center" 
          }}
        >
          <Operation value="=" onClick={handleOperationClick} />
          <Number value={0} onClick={handleNumberClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
          
        <div 
          style={{ display: "flex",
          flexDirection: "row",   
          justifyContent: "center" 
          }}
        >
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
            
        </div>
        <div 
          style={{ display: "flex",
          flexDirection: "row",   
          justifyContent: "center", 
          }}
        >
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
            
        </div>
      </div>
    </div>
  );
};

export default Calculator;
