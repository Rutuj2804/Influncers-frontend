import { Button } from '@material-ui/core'
import { CancelRounded } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'

const ErrorPopup = ({ message, path, continueFun }) => {

    const history = useHistory()

    const continueFuntion = () => {
        continueFun()
        history.push(`${path}`)
    }

    return (
        <div className="errorPopup__Wrapper">
            <div className="errorPopup__Header">
                <CancelRounded />
            </div>
            <div className="errorPopup__Content">
                <p>{message}</p>
            </div>
            <div className="errorPopup__Footer">
                <Button onClick={()=>continueFuntion()} >Continue</Button>
            </div>
        </div>
    )
}

export default ErrorPopup
