import React, { useEffect, useState } from 'react'
import Paper from '../../components/commons/paper/Paper'
import Listing from '../../components/home/Listing'
import Input from '../../components/commons/input/Input'
import { FilterListRounded } from '@material-ui/icons'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ProfileCard from '../../components/commons/profileCard/ProfileCard'
import { fetch_listings } from '../../store/actions'
import { Button, Checkbox, FormControlLabel, Slider, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

const Home = ({ fetch_listings, listings }) => {

    const [ formData, setFormData ] = useState({
        filter_search: '',
        target: 3000,
        money: 4000,
        actor: false,
        director: false,
        singer: false,
        lyricist: false,
        writer: false,
    })

    useEffect(()=>{
        fetch_listings()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleCheckBoxChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.checked });
    };

    const handleSliderChange = (eve, val) => {
        console.log(val)
        setFormData({
            ...formData, 
            [eve.target.name]: val
        })
    }

    const [type, setType] = useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const { filter_search, target, money } = formData

    const handleSubmit = e => {
        e.preventDefault()
    }

    const applyFilter = () => {
        console.log(formData, type)
    }

    return (
        <div className="home__Wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="home__FilterContainer">
                            <Paper>
                                <h5>Filters</h5>
                                <div className="home__FilterOptionsDiv mt-4">
                                    <div className="home__SearchForm">
                                        <form onSubmit={handleSubmit} >
                                            <Input 
                                                type="text"
                                                name="filter_search"
                                                value={filter_search}
                                                setFormData={setFormData}
                                                formData={formData}
                                                isRequired
                                                icon={<FilterListRounded fontSize="small" />}
                                                placeholder="Search..."
                                            />
                                        </form>
                                    </div>
                                    <div className="home__ProjectType mb-4">
                                        <FormControl style={{width: '100%'}} >
                                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={type}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={10}>Project</MenuItem>
                                            <MenuItem value={20}>Campaign</MenuItem>
                                            <MenuItem value={30}>Collaborate</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="home__Slider">
                                        <div>
                                            <Typography id="discrete-slider" gutterBottom>
                                                Target Audience
                                            </Typography>
                                            <Slider
                                                defaultValue={target}
                                                aria-labelledby="discrete-slider"
                                                valueLabelDisplay="auto"
                                                name="target"
                                                onChange={(e,v)=>handleSliderChange(e,v)}
                                                step={1000}
                                                marks
                                                min={1000}
                                                max={10000}
                                            />
                                        </div>
                                        <div>
                                            <Typography id="discrete-slider" gutterBottom>
                                                Money
                                            </Typography>
                                            <Slider
                                                defaultValue={money}
                                                aria-labelledby="discrete-slider"
                                                valueLabelDisplay="auto"
                                                onChange={(e,v)=>handleSliderChange(e,v)}
                                                name="money"
                                                step={1000}
                                                marks
                                                min={1000}
                                                max={10000}
                                            />
                                        </div>
                                    </div>
                                    <div className="home__CheckBoxOptions">
                                        <div className="home__CheckBoxDiv">
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={formData.actor}
                                                    onChange={handleCheckBoxChange}
                                                    name="actor"
                                                    color="primary"
                                                />
                                                }
                                                label="Actor"
                                            />
                                        </div>
                                        <div className="home__CheckBoxDiv">
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={formData.director}
                                                    onChange={handleCheckBoxChange}
                                                    name="director"
                                                    color="primary"
                                                />
                                                }
                                                label="Director"
                                            />
                                        </div>
                                        <div className="home__CheckBoxDiv">
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={formData.writer}
                                                    onChange={handleCheckBoxChange}
                                                    name="writer"
                                                    color="primary"
                                                />
                                                }
                                                label="Script Writer"
                                            />
                                        </div>
                                        <div className="home__CheckBoxDiv">
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={formData.singer}
                                                    onChange={handleCheckBoxChange}
                                                    name="singer"
                                                    color="primary"
                                                />
                                                }
                                                label="Singer"
                                            />
                                        </div>
                                        <div className="home__CheckBoxDiv">
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={formData.lyricist}
                                                    onChange={handleCheckBoxChange}
                                                    name="lyricist"
                                                    color="primary"
                                                />
                                                }
                                                label="Lyricist"
                                            />
                                        </div>
                                    </div>
                                    <div className="home__CheckBoxApply">
                                        <Button onClick={()=>applyFilter()} >Apply Filter</Button>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        {listings.map((val, key)=>{
                            return <Listing 
                                        key={key}
                                        id={val.id}
                                        title={val.title}
                                        requirements={val.requirements}
                                        views={val.views}
                                        applications={0}
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
                    <div className="col-lg-3 col-md-3 col-12">
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

const mapStateToProps = state => ({
    listings: state.Home.listings
})

export default connect(mapStateToProps,{ fetch_listings })(Home)