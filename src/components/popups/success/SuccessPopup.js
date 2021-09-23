import { Button } from '@material-ui/core'
import { CheckCircleRounded } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'

const SuccessPopup = ({ message, path, continueFun }) => {

    const history = useHistory()

    const continueFuntion = () => {
        continueFun()
        history.push(`${path}`)
    }

    return (
        <div className="successPopup__Wrapper">
            <div className="successPopup__Header">
                <CheckCircleRounded />
            </div>
            <div className="successPopup__Content">
                <p>{message}</p>
            </div>
            <div className="successPopup__Footer">
                <Button onClick={()=>continueFuntion()}>Continue</Button>
            </div>
        </div>
    )
}

export default SuccessPopup
