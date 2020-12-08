import React from 'react'

const Topics = () => {
    return (
        <div className="topics">
            <div className="top_heading">
            What’s happening
            </div>
            <div className="subtopics">
                <div className="text">COVID-19 . LIVE
                    <div className="subtext">
                       COVID-19 in India
                    </div>
                    </div>
                <div className="subtopic_img">
                    <img src="/images/covid.jpeg" alt=""/>
                </div>
            </div>
            <div className="subtopics">

                <div className="text">Cricket . LIVE
                    <div className="subtext">
                    Australia win the third <br/> T20I by 12 runs 
                    </div>
                    </div>
                <div className="subtopic_img">
                    <img src="/images/cricket.jpeg" alt=""/>
                </div>
                </div>
             <div className="text1">
                  Indian Premier League · Trending
                  <div className="subtext1">
                    Man of the Series
             </div>
             3,209 Tweets
             </div>
             <div className="text1">
             Sports· Trending
             <div className="subtext1">
            Natarajan
                         </div>
             49K Tweets
             </div>
             
        </div>
    )
}

export default Topics
