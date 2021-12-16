import { Button, IconButton } from '@material-ui/core'
import { AssignmentIndRounded, CloseRounded, DescriptionRounded, TitleRounded, TrackChanges, CheckRounded } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import Input from '../../commons/input/Input'
import { create_project, remove_messages_from_dashboard } from '../../../store/actions.js'
import { connect } from 'react-redux'
import SuccessPopup from '../success/SuccessPopup'
import ErrorPopup from '../error/ErrorPopup'

const AddCollaboratiion = ({ setCollaborationPopup, create_project, success_from_state, error_from_state, remove_messages_from_dashboard }) => {

    const [ formData, setFormData ] = useState({
        title: '',
        description: '',
        place: '',
        money: '',
        currency: 'INR',
        type: 'project',
        target: '',
        position: '',
        skills: [],
        skill_name: '',
        works: [],
        work_name: '',
        rewards: [],
        reward_name: '',
    })

    const { title, description, money, place, currency, position, skills, target, skill_name, works, work_name, rewards, reward_name, type } = formData

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleKeyPress = e =>{
        if(e.key === 'Enter'){
            e.preventDefault()
            if(skill_name==='') return;
            const skill = {
                id: Math.floor((Math.random())*100000),
                name: skill_name
            }
            setFormData({ ...formData, skills: [...skills, skill], skill_name: '' })
        }
    }

    const handleKeyPressForWork = e =>{
        if(e.key === 'Enter'){
            e.preventDefault()
            if(work_name==='') return;
            const skill = {
                id: Math.floor((Math.random())*100000),
                text: work_name
            }
            setFormData({ ...formData, works: [...works, skill], work_name: '' })
        }
    }

    const handleKeyPressForReward = e =>{
        if(e.key === 'Enter'){
            e.preventDefault()
            if(reward_name==='') return;
            const skill = {
                id: Math.floor((Math.random())*100000),
                text: reward_name
            }
            setFormData({ ...formData, rewards: [...rewards, skill], reward_name: '' })
        }
    }

    const handleRemoveSkills = id => {
        setFormData({ ...formData, skills: skills.filter((val)=>val.id!==id)})
    }

    const handleRemoveWorkDescription = id => {
        setFormData({ ...formData, works: works.filter((val)=>val.id!==id)})
    }

    const handleRemoveReward = id => {
        setFormData({ ...formData, rewards: rewards.filter((val)=>val.id!==id)})
    }

    const wrapperRef = useRef();

    useEffect(()=>{
        document.addEventListener('mousedown', e => {
            const { current: wrap } = wrapperRef
            if(wrap && !wrap.contains(e.target)){
                setCollaborationPopup(false)
            }
        })

        return () => {
            document.removeEventListener('mousedown', e => {
                const { current: wrap } = wrapperRef
                if(wrap && !wrap.contains(e.target)){
                    setCollaborationPopup(false)
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        create_project(title, description, type, skills, place, money, works, rewards, target, currency, position)
        setFormData({
            title: '',
            description: '',
            place: '',
            money: '',
            currency: 'INR',
            type: 'project',
            target: '',
            position: '',
            skills: [],
            skill_name: '',
            works: [],
            work_name: '',
            rewards: [],
            reward_name: '',
        })
    }

    const continueFun = () => {
        remove_messages_from_dashboard()
        setCollaborationPopup(false)
    }

    return (
        <div className="addCollaboration__Wrapper" ref={wrapperRef}>
            <div className="addCollaboration__Header">
                <h4>Create Project</h4>
                <IconButton onClick={()=>setCollaborationPopup(false)} >
                    <CloseRounded />
                </IconButton>
            </div>
            <div className="addCollaboration__Form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div>
                                <h5 className="mb-4">General Details</h5>
                                <Input
                                    type="text"
                                    name="title"
                                    value={title}
                                    setFormData={setFormData}
                                    formData={formData}
                                    isRequired
                                    icon={<TitleRounded fontSize="small" />}
                                    placeholder="Collaboration title"
                                />
                                <div className="addCollaboration__InputDiv">
                                    <label><DescriptionRounded fontSize="small" /></label>
                                    <textarea
                                        type="text"
                                        name="description"
                                        value={description}
                                        onChange={e=>handleInputChange(e)}
                                        placeholder="Collaboration description"
                                        isRequired
                                    />
                                </div>
                                <Input
                                    type="text"
                                    name="place"
                                    value={place}
                                    setFormData={setFormData}
                                    formData={formData}
                                    isRequired
                                    icon={<DescriptionRounded fontSize="small" />}
                                    placeholder="City"
                                />
                                <Input
                                    type="number"
                                    name="target"
                                    value={target}
                                    setFormData={setFormData}
                                    formData={formData}
                                    isRequired
                                    icon={<TrackChanges fontSize="small" />}
                                    placeholder="Target Audience"
                                />
                                <Input
                                    type="number"
                                    name="position"
                                    value={position}
                                    setFormData={setFormData}
                                    formData={formData}
                                    isRequired
                                    icon={<DescriptionRounded fontSize="small" />}
                                    placeholder="Number of positions"
                                />
                            </div>
                            <div className="editProfile__AdditionInputDiv">
                                <h5>Skills Required</h5>
                                {skills.length ?  <div className="addCollaboration__SkillWrapper">
                                    {skills.map((val, idx)=>{
                                        return <div key={idx}>
                                            <p>
                                                {val.name}
                                            </p>
                                            <IconButton size="small" onClick={()=>handleRemoveSkills(val.id)} ><CloseRounded fontSize="small" /></IconButton>
                                        </div>
                                    })}
                                </div> :null}
                                <div className="editProfile__LinkFormDiv">
                                    <label><AssignmentIndRounded fontSize="small" /></label>
                                    <input
                                        type="text"
                                        name="skill_name"
                                        value={skill_name}
                                        onChange={e=>handleInputChange(e)}
                                        placeholder="Enter skill and hit enter"
                                        onKeyPress={e=>handleKeyPress(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            
                            
                            <div>
                                <h5 className="mb-4">Money Involved</h5>
                                <Input
                                    type="number"
                                    name="money"
                                    value={money}
                                    setFormData={setFormData}
                                    formData={formData}
                                    isRequired
                                    icon={<DescriptionRounded fontSize="small" />}
                                    placeholder="Collaboration money"
                                />
                                <div className="addCollaboration__InputDiv">
                                    <label><DescriptionRounded fontSize="small" /></label>
                                    <select value={currency} onChange={e=>handleInputChange(e)} name="currency" >
                                        <option>USD</option>
                                    </select>
                                </div>
                                <div className="addCollaboration__InputDiv">
                                    <label><DescriptionRounded fontSize="small" /></label>
                                    <select value={type} onChange={e=>handleInputChange(e)} name="type" >
                                        <option value="project" >Per Project</option>
                                        <option value="hour" >Per Hour</option>
                                        <option value="day" >Per Day</option>
                                        <option value="week" >Per Week</option>
                                        <option value="month" >Per Month</option>
                                    </select>
                                </div>
                            </div>
                            <div className="editProfile__AdditionInputDiv">
                                <h5>Work Description</h5>
                                {works?.length ?  <div className="addCollaboration__WorkDescription">
                                    {works.map((val, idx)=>{
                                        return <div key={idx}>
                                            <div className="addCollaboration__TickDiv">
                                                <CheckRounded fontSize="small" />
                                                <p>{val.text}</p>
                                            </div>
                                            <IconButton size="small" onClick={()=>handleRemoveWorkDescription(val.id)} ><CloseRounded fontSize="small" /></IconButton>
                                        </div>
                                    })}
                                </div> :null}
                                <div className="editProfile__LinkFormDiv">
                                    <label><AssignmentIndRounded fontSize="small" /></label>
                                    <input
                                        type="text"
                                        name="work_name"
                                        value={work_name}
                                        onChange={e=>handleInputChange(e)}
                                        placeholder="Enter work description and hit enter"
                                        onKeyPress={e=>handleKeyPressForWork(e)}
                                    />
                                </div>
                            </div>
                            <div className="editProfile__AdditionInputDiv">
                                <h5>Rewards</h5>
                                {rewards?.length ?  <div className="addCollaboration__SkillWrapper">
                                    {rewards.map((val, idx)=>{
                                        return <div key={idx}>
                                            <p>
                                                {val.text}
                                            </p>
                                            <IconButton size="small" onClick={()=>handleRemoveReward(val.id)} ><CloseRounded fontSize="small" /></IconButton>
                                        </div>
                                    })}
                                </div> :null}
                                <div className="editProfile__LinkFormDiv">
                                    <label><AssignmentIndRounded fontSize="small" /></label>
                                    <input
                                        type="text"
                                        name="reward_name"
                                        value={reward_name}
                                        onChange={e=>handleInputChange(e)}
                                        placeholder="Enter work description and hit enter"
                                        onKeyPress={e=>handleKeyPressForReward(e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="addCollaboration__FormButtons">
                        <Button type="submit">Create Collaboration</Button>
                    </div>
                </form>
            </div>
            {success_from_state ? <div className="successAndError__Popup">
                <SuccessPopup message={success_from_state} path="/dashboard" continueFun={continueFun} />
            </div>: null}
            {error_from_state ? <div className="successAndError__Popup">
                <ErrorPopup message={error_from_state} path="" continueFun={continueFun} />
            </div>: null}
        </div>
    )
}

const mapStateToProps = state => ({
    success_from_state: state.Dashboard.success,
    error_from_state: state.Dashboard.error,
})

export default connect(mapStateToProps, { create_project, remove_messages_from_dashboard })(AddCollaboratiion)