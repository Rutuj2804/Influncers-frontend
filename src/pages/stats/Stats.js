import React from 'react'
// import Paper from '../../components/commons/paper/Paper'
// import BarGraph from '../../components/graphs/BarGraph'
import LineGraph from '../../components/graphs/LineGraph'
import RankProfile from './RankProfile'

const Stats = () => {
    return (
        <div className="container" >
            <div className="row" >
                <div className="col-lg-9 col-md-8 col-12">
                    <LineGraph />
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <RankProfile name="Sahil Gupta" tags="Actor, Singer" rank="1" />
                    <RankProfile name="Ram Kaushik" tags="Writer, Director" rank="2" />
                    <RankProfile name="Priya Kamaji" tags="Singer, Lyricist" rank="3" />
                    <RankProfile name="Rutuj Bokade" tags="Pata nahi" rank="4" />
                    <RankProfile name="Salman Khan" tags="Best driver" rank="5" />
                    <RankProfile name="Sahil Gupta" tags="Actor, Singer" rank="6" />
                    <RankProfile name="Ram Kaushik" tags="Writer, Director" rank="7" />
                    <RankProfile name="Priya Kamaji" tags="Singer, Lyricist" rank="8" />
                    <RankProfile name="Rutuj Bokade" tags="Pata nahi" rank="9" />
                    <RankProfile name="Salman Khan" tags="Best driver" rank="10" />
                </div>
            </div>
        </div>
    )
}

export default Stats
