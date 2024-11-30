function Jobs({ jobs, toApply }) {
    return (<>
        <table className="table table-dark table-bordered table-hover" >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price Per Hour</th>
                    <th>Technologies</th>
                    <th>Apply</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((elm, i) => <tr key={i}>
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
                        <button onClick={() => toApply(elm.id)} className="btn btn-primary">Apply</button>
                    </td>

                </tr>)}
            </tbody>
        </table>
    </>)
}

export default Jobs