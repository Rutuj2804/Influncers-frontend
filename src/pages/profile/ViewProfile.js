import React from 'react'

const ViewProfile = ({ match }) => {
    return (
        <div>
            {match.params.username}
        </div>
    )
}

export default ViewProfile
