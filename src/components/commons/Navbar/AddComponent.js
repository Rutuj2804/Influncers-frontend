import { ChevronRightRounded, GroupWorkRounded } from '@material-ui/icons'
import React from 'react'

const AddComponent = ({ setCollaborationPopup }) => {
    
    return (
        <div className="addComponent__Wrapper" onClick={()=>setCollaborationPopup(true)}>
            <div className="addComponent__Left" >
                <GroupWorkRounded />
                <div className="addComponent__UserDetail" >
                    <p>Add collaboration</p>
                    <span>Your collaboration will be visible to all</span>
                </div>
            </div>
            <div className="addComponent__Right">
                <ChevronRightRounded />
            </div>
        </div>
    )
}

export default AddComponent
