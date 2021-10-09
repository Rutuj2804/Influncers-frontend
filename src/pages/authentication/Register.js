import { Button } from '@material-ui/core'
import { EmailRounded, LocationCityRounded, PeopleAltRounded, PersonPinCircleRounded, PersonRounded, SupervisorAccountRounded, VpnKeyRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { register_user } from '../../store/actions'
import Input from '../../components/commons/input/Input'
import { connect } from 'react-redux'
import Image from '../../assets/images/image.jpg'

const Register = ({ register_user, isAuthenticated, error_from_state }) => {

    const [ formData, setFormData ] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        city: '',
        state: '',
        password: ''
    })

    const { first_name, last_name, email, city, state, username, password } = formData

    const handleSubmit = e => {
        e.preventDefault();
        register_user(formData)
        setFormData({
            ...formData,
            first_name: '',
            last_name: '',
            email: '',
            city: '',
            state: '',
            username: '',
            password: ''
        })
    }

    const history = useHistory();

    if(isAuthenticated){
        return <Redirect to="/" />
    }

    return (
        <div className="auth__Wrapper">
                <div className="auth__FormSide">
                    <div className="auth__Title">
                        <h4>Register</h4>
                        <p>See your growth and get consulting support</p>
                        <p style={{color: "red"}} >{error_from_state}</p>
                    </div>
                    <form onSubmit={handleSubmit} >
                            <Input
                                type="text"
                                name="first_name"
                                value={first_name}
                                formData={formData}
                                setFormData={setFormData}
                                icon={<PeopleAltRounded fontSize="small" />}
                                placeholder="Enter first name"
                                isRequired
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
                                type="password"
                                name="password"
                                value={password}
                                formData={formData}
                                setFormData={setFormData}
                                icon={<VpnKeyRounded fontSize="small" />}
                                placeholder="Enter password"
                                isRequired
                            />
                        <div className="auth__ButtonGrp" >
                            <Button type="submit" >Register</Button>
                        </div>
                    </form>
                    <div className="auth__Bottom">
                        <p>Already have an account? <span onClick={()=>history.push('/login')} >Login Now</span></p>
                    </div>
                </div>
                <div className="auth__Background">
                    <img src={Image} alt="background" />
                </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Login.isAuthenticated,
    error_from_state: state.Login.error
})

export default connect(mapStateToProps, { register_user })(Register)