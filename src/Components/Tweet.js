import React from 'react'
import CreateTweet from './CreateTweet'
import Posts from './Posts'
import { FaRegSnowflake } from 'react-icons/fa'


const Tweet = () => {
    return (
        <div className='posts'>
            <div className="posts__home">
                Home
                <FaRegSnowflake  className='icon'/>
            </div>
             <CreateTweet />
             <Posts />
             <Posts />

        </div>
    )
}

export default Tweet
