import { Button, IconButton } from '@material-ui/core'
import { AssignmentIndRounded, CloseRounded, DescriptionRounded, EmailRounded, Facebook, Instagram, LinkRounded, LocationCityRounded, PeopleAltRounded, PersonPinCircleRounded, PersonRounded, SupervisorAccountRounded, YouTube } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { update_user } from '../../store/actions'
import { connect } from 'react-redux'
import Input from '../../components/commons/input/Input'

const EditProfile = ({ user_from_state, update_user, error_from_state, success_from_state }) => {

    const [ formData, setFormData ] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        city: '',
        state: '',
        description: '',
        skills: [],
        skill_name: '',
        instagram: '',
        facebook: '',
        youtube: '',
        links: [],
        link_name: '',
        link_input: '',
    })

    useEffect(()=>{
        setFormData({
            first_name: user_from_state.first_name,
            last_name: user_from_state.last_name,
            username: user_from_state.username,
            email: user_from_state.email,
            city: user_from_state.city,
            state: user_from_state.state,
            description: user_from_state.description,
            skills: user_from_state.skills,
            instagram: user_from_state.instagram,
            facebook: user_from_state.facebook,
            youtube: user_from_state.youtube,
            links: user_from_state.links,
        })
    },[user_from_state])

    const { 
        first_name,
        last_name,
        username,
        email,
        city,
        state,
        description,
        skills,
        skill_name,
        instagram,
        facebook,
        youtube,
        links,
        link_name,
        link_input
    } = formData

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleAddLinks = () => {
        if( link_input === '' || link_name === '') return;
        const link = {
            id: Math.floor((Math.random())*100000),
            title: link_name,
            link: link_input
        }
        setFormData({ ...formData, links: [...links, link], link_name: '', link_input: '' })
    }

    const handleAddSkills = () => {
        // if(e.key === 'Enter'){
            if(skill_name==='') return;
            const skill = {
                id: Math.floor((Math.random())*100000),
                name: skill_name
            }
            setFormData({ ...formData, skills: [...skills, skill], skill_name: '', skill_input: '' })
        // }
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        update_user(formData)
    }

    const handleRemoveLinks = id => {
        setFormData({ ...formData, links: links.filter((val)=>val.id!==id)})
    }

    const handleRemoveSkills = id => {
        setFormData({ ...formData, skills: skills.filter((val)=>val.id!==id)})
    }

    return (
        <div className="editProfile__Wrapper">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12 my-5">
                    <div>
                        <p style={success_from_state?{color: "green"}:{color: "red"}}>{error_from_state || success_from_state}</p>
                        <form onSubmit={handleFormSubmit} >
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <Input 
                                        type="text"
                                        name="first_name"
                                        value={first_name}
                                        formData={formData}
                                        setFormData={setFormData}
                                        isRequired
                                        icon={<PeopleAltRounded fontSize="small" />}
                                        placeholder="Enter first name"
                                    />
                                    <Input
                                        type="text"
                                        name="last_name"
                                        value={last_name}
                                        formData={formData}
                                        setFormData={setFormData}
                                        icon={<SupervisorAccountRounded fontSize="small" />}
                                        placeholder="Enter last name"
                                        isRequired
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        value={email}
                                        formData={formData}
                                        setFormData={setFormData}
                                        icon={<EmailRounded fontSize="small" />}
                                        placeholder="Enter email"
                                        isRequired
                                        disabled
                                    />
                                    <Input
                                        type="text"
                                        name="city"
                                        value={city}
                                        formData={formData}
                                        setFormData={setFormData}
                                        icon={<LocationCityRounded fontSize="small" />}
                                        placeholder="Enter city"
                                        isRequired
                                    />
                                    <Input
                                        type="text"
                                        name="state"
                                        value={state}
                                        formData={formData}
                                        setFormData={setFormData}
                                        icon={<PersonPinCircleRounded fontSize="small" />}
                                        placeholder="Enter state"
                                        isRequired
                                    />
                                    <Input
                                        type="text"
                                        name="username"
                                        value={username}
                                        formData={formData}
                                        setFormData={setFormData}
                                        icon={<PersonRounded fontSize="small" />}
                                        placeholder="Enter username"
                                        isRequired
                                    />
                                    <Input
                                        type="text"
                                        name="instagram"
                                        value={instagram}
                                        formData={formData}
                                        setFormData={setFormData}
                                        icon={<Instagram fontSize="small" />}
                                        placeholder="Enter Instagram id"
                                    />
                                    <Input
                                        type="text"
                                        name="facebook"
                                        value={facebook}
                                        formData={formData}
                                        setFormData={setFormData}
                                        icon={<Facebook fontSize="small" />}
                                        placeholder="Enter facebook id"
                                    />
                                    <Input
                                        type="text"
                                        name="youtube"
                                        value={youtube}
                                        formData={formData}
                                        setFormData={setFormData}
                                        icon={<YouTube fontSize="small" />}
                                        placeholder="Enter youtube id"
                                    />
                                    <div className="editProfile__InputDiv">
                                        <textarea
                                            name="description"
                                            value={description}
                                            onChange={e=>handleChange(e)}
                                            placeholder="Enter Description"
                                        ></textarea>
                                        <label><DescriptionRounded/></label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    
                                    <div className="editProfile__AdditionInputDiv">
                                        <h5>Links</h5>
                                        <div>
                                            {links.map((val, idx)=>{
                                                return <div className="editProfile__LinkWrapper" key={idx}>
                                                    <a href={val.link} rel="noreferrer" target="_blank" >
                                                        <LinkRounded/>
                                                        <h6>{val.title}</h6>
                                                    </a>
                                                    <IconButton size="small" onClick={()=>handleRemoveLinks(val.id)} ><CloseRounded fontSize="small" /></IconButton>
                                                </div>
                                            })}
                                        </div>
                                        <div className="editProfile__LinkFormDiv">
                                            <Input
                                                type="text"
                                                name="link_name"
                                                value={link_name}
                                                formData={formData}
                                                setFormData={setFormData}
                                                icon={<AssignmentIndRounded fontSize="small" />}
                                                placeholder="Enter link name"
                                            />
                                            <Input
                                                type="text"
                                                name="link_input"
                                                value={link_input}
                                                formData={formData}
                                                setFormData={setFormData}
                                                icon={<LinkRounded fontSize="small" />}
                                                placeholder="Enter link"
                                                onKeyPressFunction={handleAddLinks}
                                            />
                                            <Button onClick={()=>handleAddLinks()}>Add link</Button>
                                        </div>
                                    </div>
                                    <div className="editProfile__AdditionInputDiv my-4">
                                        <h5>Skills</h5>
                                        {skills.length ?  <div className="editProfile__SkillWrapper">
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
                                            <Input
                                                type="text"
                                                name="skill_name"
                                                value={skill_name}
                                                formData={formData}
                                                setFormData={setFormData}
                                                icon={<AssignmentIndRounded fontSize="small" />}
                                                placeholder="Enter skill name"
                                                onKeyPressFunction={handleAddSkills}
                                            />
                                            <Button onClick={()=>handleAddSkills()}>Add skill</Button>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div className="editProfile__ButtonGroup">
                                <Button type="submit" >Save changes</Button>
                                <Button>Cancel</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3"></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user_from_state: state.Login,
    error_from_state: state.Login.error,
    success_from_state: state.Login.success,
})

export default connect(mapStateToProps, { update_user })(EditProfile)