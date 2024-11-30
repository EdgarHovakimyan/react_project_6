import { useState } from "react";
import Jobs from "./components/Jobs";
import MyJobs from "./components/MyJobs";

function App() {
  const [jobs, setJobs] = useState([
    { id: 1, name: "Antonio", description: "Bold Visionary", pricePerHour: 400, technologies: ["C#", "ANGULAR", "PYTHON", "NODE.JS"] },
    { id: 2, name: "Jack", description: "Dependable Associate", pricePerHour: 500, technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT"] },
    { id: 3, name: "Eliza", description: "Creative Thinker", pricePerHour: 330, technologies: ["C++", "C#", "JAVA", "GO"] },
    { id: 4, name: "Jessica", description: "Good Teamlead", pricePerHour: 650, technologies: ["JAVASCRIPT", "SQL", "PYTHON", "NODE.JS", "C++"] }
  ])
  const [myJobs, setMyJobs] = useState([])
  const toApply = (id) => {
    let x = jobs.find(elm => elm.id == id)
    if (!myJobs.includes(x)) {
      setMyJobs([...myJobs, x])
    }
  }
  const cancelJob = (id) => {
    setMyJobs(
      myJobs.filter((elm) => elm.id != id)
    )
  }
  const [technologies, setTechnologies] = useState([
    "C#", "C++", "PYTHON", "HTML", "CSS", "JAVASCRIPT", "REACT", "ANGULAR", "NODE.JS", "JAVA", "GO", "SQL"
  ])
  return (<>
    <Jobs
      jobs={jobs} toApply={toApply}
    />
    <MyJobs
      myJobs={myJobs} cancelJob={cancelJob} technologies={technologies}
    />
  </>)
}

export default App;
