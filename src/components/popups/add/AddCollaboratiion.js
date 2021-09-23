import { Button, IconButton } from '@material-ui/core'
import { AssignmentIndRounded, CloseRounded, DescriptionRounded, TitleRounded, TrackChanges } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import Input from '../../commons/input/Input'

const AddCollaboratiion = ({ setCollaborationPopup }) => {

    const [ formData, setFormData ] = useState({
        title: '',
        description: '',
        place: '',
        money: '',
        currency: 'INR',
        target: '',
        position: '',
        skills: [],
        skill_name: '',
        works: [],
        work_name: '',
    })

    const { title, description, money, place, currency, position, skills, target, skill_name, works, work_name } = formData

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
                name: work_name
            }
            setFormData({ ...formData, works: [...works, skill], work_name: '' })
        }
    }

    const handleRemoveSkills = id => {
        setFormData({ ...formData, skills: skills.filter((val)=>val.id!==id)})
    }

    const handleRemoveWorkDescription = id => {
        setFormData({ ...formData, works: works.filter((val)=>val.id!==id)})
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
    }, [])

    return (
        <div className="addCollaboration__Wrapper" ref={wrapperRef}>
            <div className="addCollaboration__Header">
                <h5>Collaboration</h5>
                <IconButton onClick={()=>setCollaborationPopup(false)} >
                    <CloseRounded />
                </IconButton>
            </div>
            <div className="addCollaboration__Form">
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
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
                                placeholder="City (Ex. Pune, Maharashtra)"
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
                                <select value={currency} onChange={e=>setFormData(e)} name="currency" >
                                    <option>INR</option>
                                    <option>USD</option>
                                    <option>FRK</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            
                            <div className="addCollaboration__InputDiv">
                                <label><DescriptionRounded fontSize="small" /></label>
                                <select>
                                    <option>Video</option>
                                    <option>Songs</option>
                                    <option>Photos</option>
                                    <option>Project</option>
                                    <option>Advertisment</option>
                                </select>
                            </div>
                            <div className="editProfile__AdditionInputDiv">
                                <h5>Skills</h5>
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
                            <div className="editProfile__AdditionInputDiv">
                                <h5>Work Description</h5>
                                {works.length ?  <div className="addCollaboration__WorkDescription">
                                    {works.map((val, idx)=>{
                                        return <div key={idx}>
                                            <p>
                                                {val.name}
                                            </p>
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
                        </div>
                    </div>
                    <div className="addCollaboration__FormButtons">
                        <Button type="submit">Create Collaboration</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCollaboratiion
