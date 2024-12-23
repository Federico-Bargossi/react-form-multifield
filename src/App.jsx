

import tasks from "../src/assets/data/data"

const array1 = tasks.filter((curElem) => curElem.state === "completed");


const array2 = tasks.filter((curElem) => curElem.state === "in_progress" || curElem.state === "backlog")


function App() {


  return (
    <>
      <div className="header">
        <h1 className="center">Task Manager</h1>
      </div>
      <div className="container">
        <div>Completed Tasks ({array1.length})
        </div>
        <br />
        <ul className="ul">
          {array1.map((cure, index) => (
            <li key={index}>
              <div className="title">
                <h5>{cure.title}</h5>
                <div className="state">{cure.state}</div>
              </div>
              <p className="p">Priorità: {cure.priority}</p>
              <p className="p">Est. time {cure.estimatedTime}</p>
            </li>
          ))}
        </ul>
        <br />
        <hr />
        <br />
        <div>Current Tasks ({array2.length})
        </div>
        <br />
        <ul className="ul">
          {array2.map((cure, index) => (
            <li key={index}>
              <div className="title">
                <h5>{cure.title}</h5>
                <div className="state">{cure.state}</div>
              </div>
              <p className="p">Priorità: {cure.priority}</p>
              <p className="p">Est. time {cure.estimatedTime}</p>
            </li>
          ))}
        </ul>
      </div >
    </>
  )
}

export default App