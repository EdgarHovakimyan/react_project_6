import React, { useState } from "react"

function MyJobs({ myJobs, cancelJob, technologies }) {
    const [selectValue, setSelectValue] = useState("")
    const [inputValue, setInputValue] = useState("")
    let filteredTechnologies = myJobs
    if (selectValue) {
        filteredTechnologies = filteredTechnologies.filter(elm => selectValue.every(el => elm.technologies.includes(el)))
    }
    if (inputValue) {
        filteredTechnologies = filteredTechnologies.filter((elm) => elm.pricePerHour > inputValue)
    }
    return (<>
        <select multiple className="form-control" value={selectValue} onChange={(e) => {
            let val = [...e.target.selectedOptions].map(el => el.innerText)
            console.log(val);
            setSelectValue(val)
        }}>
            <option value="" hidden>Select Modules</option>
            {technologies.map((ele, d) => <option key={d}>
                {ele}
            </option>)}
        </select>
        <input placeholder="Type here price" type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <table className="table table-dark table-bordered table-hover" >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price Per Hour</th>
                    <th>Technologies</th>
                    <th>Cancel</th>
                </tr>
            </thead>
            <tbody>
                {filteredTechnologies.map((elm, i) => <tr key={i}>
                    <td>{elm.id}</td>
                    <td>{elm.name}</td>
                    <td>{elm.description}</td>
                    <td>{elm.pricePerHour}</td>
                    <td>
                        <ul>
                            {elm.technologies.map((el, k) => <li key={k}>
                                {el}
                            </li>)}
                        </ul>
                    </td>
                    <td>
                        <button onClick={() => cancelJob(elm.id)} className="btn btn-danger">Cancel</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </>)
}

export default React.memo(MyJobs)