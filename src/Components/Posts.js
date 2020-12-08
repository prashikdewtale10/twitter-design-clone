import React from 'react'
import { FaArrowAltCircleDown, FaArrowUp, FaComment, FaHeart, FaRegArrowAltCircleUp, FaRegCheckCircle, FaRegCommentAlt, FaRegHeart, FaSync } from 'react-icons/fa'

const Posts = () => {
    return (
        <div className="posts_block">
            <div className="posts_create">
                <div className="post_first_img">
                    <img src="/images/photo.jpg" alt="profile img"/>
                </div>
                <div className="post_first_name">
                    <strong>Prashik Dewtale</strong> <FaRegCheckCircle className="check" />
                </div>
                <div className="post_first_username">@prashikdewtale . <span>5m</span> </div>
            </div>
            <div className="posts_details">
                <div className="posts_details_msg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum expedita modi dolores nulla sapiente, corrupti labore culpa, libero tempore architecto laudantium, officiis et magni porro beatae deserunt id molestias dolor?
                </div>
                <div className="posts_details_img">
                    <img src="/images/img2.jpg" alt=""/>
                </div>
                <div className="reaction">
                    <div className="re1">
                    <FaRegCommentAlt className="re re1" title="comment" />100
                    </div>
                    <div className="re2">
                    <FaSync className="re re2" />133
                    </div>
                    <div className="re3">
                         <FaRegHeart className="re re3" />5.2
                    </div>
                    <div className="re4">
                        <FaArrowUp className='re re4' />
                    </div>
                    
                    

                </div>
            
            </div>
        </div>
 
    )
}

export default Posts
