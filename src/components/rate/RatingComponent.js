import React, { useState } from 'react'
import { Rating } from '@material-ui/lab'
import { Button } from '@material-ui/core';
import { rate_hired } from '../../store/actions'
import { connect } from 'react-redux'

const RatingComponent = ({ id, full_name, username, rate_hired }) => {

    const [ rate, setRate ] = useState(0);

    const submitForm = e => {
        e.preventDefault();
        rate_hired(id, rate)
    }

    return (
        <div className="ratingComponent__Wrapper">
            <h6>{full_name}</h6>
            <p>@{username}</p>
            <form onSubmit={submitForm}>
                <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {
                        setRate(newValue);
                    }}
                />
                <Button type="submit" >Rate</Button>
            </form>
        </div>
    )
}

export default connect(null, { rate_hired })(RatingComponent)