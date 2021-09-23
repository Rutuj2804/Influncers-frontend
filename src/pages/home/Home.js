import React, { useEffect, useState } from 'react'
import Listing from '../../components/home/Listing'
import { LocationOnRounded, SearchRounded } from '@material-ui/icons'
import { fetch_listings, filter_listings } from '../../store/actions'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

const Home = ({ fetch_listings, listings, filter_listings }) => {

    const [ formData, setFormData ] = useState({
        skills: '',
        location: '',
        salary_type: 'hour',
        salary: '1000',
    })

    useEffect(()=>{
        fetch_listings()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (event) => {
        setFormData({ ...formData,[event.target.name]:event.target.value});
    };

    const { skills, location, salary_type, salary } = formData

    const handleSubmit = e => {
        e.preventDefault()
        filter_listings(formData)
    }

    return (
        <div className="home__Wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-12 globalDivDisplayNone">
                        <div className="home__FilterContainer">
                                <h5>Filters</h5>
                                <div className="home__FilterOptionsDiv mt-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="home__SkillsSearch">
                                            <h6>Skills</h6>
                                            <div className="home__SkillsSearchDiv">
                                                <label><SearchRounded fontSize="small" /></label>
                                                <input 
                                                    type="text"
                                                    name="skills"
                                                    value={skills}
                                                    onChange={e=>handleChange(e)}
                                                    placeholder="Search Skills"
                                                />
                                            </div>
                                        </div>
                                        <div className="home__SkillsSearch">
                                            <h6>Location</h6>
                                            <div className="home__SkillsSearchDiv">
                                                <label><LocationOnRounded fontSize="small" /></label>
                                                <input 
                                                    type="text"
                                                    name="location"
                                                    value={location}
                                                    onChange={e=>handleChange(e)}
                                                    placeholder="Search By Location"
                                                />
                                            </div>
                                        </div>
                                        <div className="home__SkillsSearch">
                                            <h6>Salary Type</h6>
                                            <div className="home__SalaryType">
                                                <label htmlFor="hour" className="radio_Label" >
                                                    <input id="hour" name="salary_type" type="radio" checked={salary_type==='hour'} value="hour" onChange={e=>handleChange(e)} className="radio_input" />
                                                    <div className="radio_Radio"></div>
                                                    Per Hourly
                                                </label>
                                                <label htmlFor="day" className="radio_Label" >
                                                    <input id="day" name="salary_type" type="radio" checked={salary_type==='day'} value="day" onChange={e=>handleChange(e)} className="radio_input" />
                                                    <div className="radio_Radio"></div>
                                                    Per Day
                                                </label>
                                                <label htmlFor="month" className="radio_Label" >
                                                    <input id="month" name="salary_type" type="radio" checked={salary_type==='month'} value="month" onChange={e=>handleChange(e)} className="radio_input" />
                                                    <div className="radio_Radio"></div>
                                                    Per Monthly
                                                </label>
                                                <label htmlFor="week" className="radio_Label" >
                                                    <input id="week" name="salary_type" type="radio" checked={salary_type==='week'} value="week" onChange={e=>handleChange(e)} className="radio_input" />
                                                    <div className="radio_Radio"></div>
                                                    Per Week
                                                </label>
                                                <label htmlFor="project" className="radio_Label" >
                                                    <input id="project" name="salary_type" type="radio" checked={salary_type==='project'} value="project" onChange={e=>handleChange(e)} className="radio_input" />
                                                    <div className="radio_Radio"></div>
                                                    Per Project
                                                </label>
                                            </div>
                                        </div>
                                        <div className="home__SkillsSearch">
                                            <h6>Salary</h6>
                                            <div className="home__SalaryType">
                                                <label htmlFor="thousand" className="radio_Label" >
                                                    <input id="thousand" name="salary" type="radio" checked={salary==="1000"} value={"1000"} onChange={e=>handleChange(e)} className="radio_input" />
                                                    <div className="radio_Radio"></div>
                                                    {`< 1,000 $`}
                                                </label>
                                                <label htmlFor="fivek" className="radio_Label" >
                                                    <input id="fivek" name="salary" type="radio" checked={salary==="5000"} value={"5000"} onChange={e=>handleChange(e)} className="radio_input" />
                                                    <div className="radio_Radio"></div>
                                                    {`1,000 $ - 10,000 $`}
                                                </label>
                                                <label htmlFor="tenk" className="radio_Label" >
                                                    <input id="tenk" name="salary" type="radio" checked={salary==="10000"} value={"10000"} onChange={e=>handleChange(e)} className="radio_input" />
                                                    <div className="radio_Radio"></div>
                                                    {`> 10,000 $`}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="home__FilterButton">
                                            <Button type="submit">Filter</Button>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-12">
                        {listings.map((val, key)=>{
                            return <Listing 
                                        key={key}
                                        id={val.id}
                                        title={val.title}
                                        requirements={val.requirements}
                                        views={val.views.length}
                                        applications={val.applications.length}
                                        price={val.payment}
                                        price_on={'video'}
                                        type={val.type}
                                        datetime={val.created_at}
                                        place={val.place}
                                        target={val.target}
                                        positions={val.positions}
                                    />
                        })}
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 globalDivDisplayNone">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    listings: state.Home.listings
})

export default connect(mapStateToProps,{ fetch_listings, filter_listings })(Home)