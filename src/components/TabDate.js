import {useState} from 'react';

function TabDate() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="dater">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Yesterday
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Today
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Tomorrow
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}>
              
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}>
          </div>
        </div>
      </div>
    );
  }
  
// Yes Tod Tom

let tomorrow = new Date();
tomorrow.setDate(new Date().getDate()+1);

let tday = new Date('Apr 30, 2000');
console.log(tday); 

let nextDay = new Date(tday);
nextDay.setDate(tday.getDate() + 1);
console.log(nextDay); 


let yesterday = new Date();
tomorrow.setDate(new Date().getDate()-1);

let yday = new Date('Apr 30, 2000');
console.log(yday); 

let yestDay = new Date(yday);
yestDay.setDate(yday.getDate() - 1);
console.log(nextDay); 

export default TabDate