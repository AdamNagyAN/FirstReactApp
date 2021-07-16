import React from 'react'

function Employee({ firstName: fName, id}) {
    return (
        <div>
            {`Name: ${fName}, ID: ${id}`}
        </div>
    )
}

export default Employee
