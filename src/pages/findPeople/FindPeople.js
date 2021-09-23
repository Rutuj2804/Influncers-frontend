import { Button } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import React, { useState } from 'react'
import Listing from '../../components/home/Listing';
import ProfileCard from '../../components/commons/profileCard/ProfileCard';
import { search_database } from '../../store/actions'
import { connect } from 'react-redux'

const FindPeople = ({ users, listings, search_database }) => {

    const [ search, setSearch ] = useState('')

    const [ selectedOption, setSelectedOption ] = useState('all')

    const options = [
        { value: 'all', label: 'All' },
        { value: 'people', label: 'People' },
        { value: 'listings', label: 'Listings' },
        { value: 'projects', label: 'Projects' },
    ];

    const handleSearchSubmit = e => {
        e.preventDefault();
        search_database(selectedOption, search)
    }

    return (
        <div>
            <div className="findPeople__SearchForm">
                <form onSubmit={handleSearchSubmit} >
                    <div className="findPeople__InputDiv">
                        <input 
                            type="text"
                            name="search"
                            value={search}
                            onChange={e=>setSearch(e.target.value)}
                            required
                            placeholder="Search people, projects, listings..."
                        />
                        <label onClick={()=>setSearch('')} ><CloseRounded fontSize="small" /></label>
                    </div>
                    <div className="findPeople__Select" >
                        <select value={selectedOption} onChange={e=>setSelectedOption(e.target.value)}>
                            {options.map((val, key)=>{
                                return <option key={key} value={val.value}>{val.label}</option>
                            })}
                        </select>
                    </div>
                    <Button type="submit" >Search</Button>
                </form>
            </div>
            <div className="findPeople__Results mt-5" >
                {
                    selectedOption === 'all' && (
                        <div className="row">
                            <div className="col-lg-3 globalDivDisplayNone" >
                                {users.map((val, key)=>{
                                    return <ProfileCard 
                                                key={key} 
                                                full_name={val.first_name+' '+val.last_name}
                                                place={val.city+', '+val.state}
                                                username={val.username}
                                                online={val.online}
                                                skills={val.skills}
                                                photo={`${process.env.REACT_APP_API_URL}${val.photo}`}
                                            />
                                })}
                            </div>
                            <div className="col-lg-6 col-12" >
                                {listings.map((val, key)=>{
                                    return <Listing 
                                                key={key}
                                                id={val.id}
                                                title={val.title}
                                                requirements={val.requirements}
                                                views={val.views}
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
                            <div className="col-lg-3 globalDivDisplayNone" >
                                {/* <ProfileCard /> */}
                            </div>
                        </div>
                    )
                }
                {
                    selectedOption === 'people' && (
                        <div className="row">
                            {users.map((val, key)=>{
                                    return <div className="col-lg-4 col-md-6 col-12" key={key} >
                                            <ProfileCard  
                                                key={key}
                                                full_name={val.first_name+' '+val.last_name}
                                                place={val.city+', '+val.state}
                                                username={val.username}
                                                online={val.online}
                                                skills={val.skills}
                                                photo={`${process.env.REACT_APP_API_URL}${val.photo}`}
                                            />
                                        </div>
                                })}
                            
                        </div>
                    )
                }
                {
                    selectedOption === 'listings' && (
                        <div className="row">
                            <div className="col-lg-3 col-12" ></div>
                            <div className="col-lg-6 col-12" >
                            <Listing id={1} title="Title" requirements={['actor', 'director', 'painter']} views="20" applications="10" price="280" price_on="project" type="project" datetime="2 days ago" place="pune, maharashtra" target="15,000" positions={2} />
                            </div>
                            <div className="col-lg-3 col-12" ></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.FindPeople.users,
    listings: state.FindPeople.listings,
})

export default connect(mapStateToProps, { search_database })(FindPeople)