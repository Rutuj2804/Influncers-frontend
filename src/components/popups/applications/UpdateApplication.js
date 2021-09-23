import { Button, IconButton } from '@material-ui/core'
import { CloseRounded } from '@material-ui/icons'
import React, { useState } from 'react'

const UpdateApplication = ({ projectID, applicationID, resetFuntion, defaultValue, funtionToRun }) => {

    const [ radio_light,setRadioLight ] = useState(defaultValue?defaultValue:"")

    const handleSubmit = e => {
        e.preventDefault()
        funtionToRun(projectID, applicationID, radio_light);
        resetFuntion(false);
    }

    return (
        <div className="updateApplication__Wrapper" >
            <div className="updateApplication__Header">
                <h6>Update Application</h6>
                <IconButton onClick={()=>resetFuntion(null)} ><CloseRounded fontSize="small" /></IconButton>
            </div>
            <div className="updateApplication__Form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="radioblue" className="radio_Label" >
                            <input id="radioblue" name="light" type="radio" checked={radio_light==='notviewed'} value="notviewed" onChange={e=>setRadioLight(e.target.value)} className="radio_input" />
                            <div className="radio_Radio radio_blue"></div>
                            Not Viewed
                        </label>
                        <label htmlFor="radioorange" className="radio_Label" >
                            <input id="radioorange" name="light" type="radio" value="underprocess" checked={radio_light==='underprocess'} onChange={e=>setRadioLight(e.target.value)} className="radio_input" />
                            <div className="radio_Radio radio_yellow"></div>
                            {/* label */}
                            Under Review
                        </label>
                        <label htmlFor="radiogreen" className="radio_Label" >
                            <input id="radiogreen" name="light" type="radio" value="hired" checked={radio_light==='hired'} onChange={e=>setRadioLight(e.target.value)} className="radio_input" />
                            <div className="radio_Radio"></div>
                            {/* label */}
                            Hired
                        </label>
                        <label htmlFor="radiored" className="radio_Label" >
                            <input id="radiored" name="light" type="radio" value="rejected" checked={radio_light==='rejected'} onChange={e=>setRadioLight(e.target.value)} className="radio_input" />
                            <div className="radio_Radio radio_red"></div>
                            {/* label */}
                            Rejected
                        </label>
                    </div>
                    <div className="updateApplication__ButtonGrp">
                        <Button onClick={()=>resetFuntion(null)} >Cancel</Button>
                        <Button type="submit">Update</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateApplication