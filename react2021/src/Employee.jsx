import React from 'react'

function Employee({ firstName: fName}) {
    return (
        <div>
            {`Name: ${fName}`}
        </div>
    )
}

export default Employee
