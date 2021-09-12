import React, { useEffect } from 'react'
import NotificationElement from './NotificationElement'
import { fetch_notifications } from '../../store/actions'
import { connect } from 'react-redux'

const Notifications = ({ fetch_notifications, notifications }) => {

    useEffect(()=>{
        fetch_notifications()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-md-2 col-12"></div>
                <div className="col-lg-6 col-md-8 col-12 mt-2">
                    {
                        notifications.map((val, key)=>{
                            return <NotificationElement
                                        key={key}
                                        name={val.by_user.first_name + ' ' + val.by_user.last_name}
                                        message={val.text_one}
                                        highlighted={val.highlighted_text}
                                        message_second={val.text_two}
                                        time={val.created_at}
                                        online
                                    />
                        })
                    }
                </div>
                <div className="col-lg-3 col-md-2 col-12"></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    notifications: state.Notifications.notifications
})

export default connect(mapStateToProps, { fetch_notifications })(Notifications)