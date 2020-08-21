import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import './VideoRow.css'

const VideoRow = ({
    views,
    subs,
    description,
    timestamp,
    channel,
    title,
    image
}) => {
    return (
        <div className="videoRow">
             <img src={image} alt=""/>
             <div className="videoRow__text">
                 <h3>{title}</h3>
                 <p className="videoRow__headline">{channel} <span className="videoRow__subs"> <span className="videoRow_subsNumber">{subs}</span> subscribers</span> {views} views . {timestamp}</p>
                 <p className="videoRow__description">{description}</p>
             </div>  
        </div>
    )
}

export default VideoRow;