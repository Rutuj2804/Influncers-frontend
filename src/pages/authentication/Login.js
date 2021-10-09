import { Button } from '@material-ui/core'
import { PersonRounded, VpnKeyRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { login_user } from '../../store/actions'
import { connect } from 'react-redux'
import Input from '../../components/commons/input/Input'
import Image from '../../assets/images/image.jpg'

const Login = ({ login_user, isAuthenticated, error_from_state }) => {

    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData

    const handleSubmit = e => {
        e.preventDefault();
        login_user(formData)
        setFormData({
            ...formData,
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
                        <h4>Login</h4>
                        <p>See your growth and get consulting support</p>
                        <p style={{color: "red"}} >{error_from_state}</p>
                    </div>
                    <form onSubmit={handleSubmit} >
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
                        <div className="auth__ForgotPassword">
                            <p>Forgot password?</p>
                        </div>
                        <div className="auth__ButtonGrp" >
                            <Button type="submit" >Login</Button>
                        </div>
                    </form>
                    <div className="auth__Bottom">
                        <p>Don't have an account? <span onClick={()=>history.push('/register')} >Register Now</span></p>
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
    error_from_state: state.Login.error,
})

export default connect(mapStateToProps, { login_user })(Login)