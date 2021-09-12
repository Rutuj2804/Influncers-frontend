import React from 'react'
import Campaign from '../../components/dashboard/Campaign'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'

const Dashboard = () => {
    return (
        <div className="pt-4">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12">
                    <AreaApexGraph/>
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                    <Campaign/>
                    <Campaign/>
                    <Campaign/>
                    <Campaign/>
                    <Campaign/>
                    <Campaign/>
                    
                </div>
                <div className="col-lg-8 col-md-6 col-12">
                </div>
            </div>
        </div>
    )
}

export default Dashboard
