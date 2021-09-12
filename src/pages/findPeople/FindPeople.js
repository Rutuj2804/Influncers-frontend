import { Button } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import React, { useState } from 'react'
import Select from 'react-select';
import ProfileCard from '../../components/commons/profileCard/ProfileCard';
import Listing from '../../components/home/Listing'

const FindPeople = () => {

    const [ search, setSearch ] = useState('')

    const [ selectedOption, setSelectedOption ] = useState('')

    const options = [
        { value: 'people', label: 'People' },
        { value: 'listings', label: 'Listings' },
        { value: 'projects', label: 'Projects' },
    ];

    const handleSearchSubmit = e => {
        e.preventDefault();
        console.log(search, selectedOption.value)
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
                        <Select
                            value={selectedOption}
                            onChange={e=>setSelectedOption(e)}
                            options={options}
                        />
                    </div>
                    <Button type="submit" >Search</Button>
                </form>
            </div>
            <div className="findPeople__Results mt-5" >
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div>
                            <ProfileCard/>
                            <ProfileCard/>
                            <ProfileCard/>
                            <ProfileCard/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div>
                            <Listing />
                            <Listing />
                            <Listing />
                            <Listing />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div>
                            <ProfileCard/>
                            <ProfileCard/>
                            <ProfileCard/>
                            <ProfileCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindPeople
