import React from "react"
import parse from "html-react-parser"
import "./videoItem.css"

const VideoItem = (props) => {
  const title = parse(props.video.snippet.title)
  return (
    <div className="video-item item" onClick={() => props.onVideoSelect(props.video)}>
      <img 
        src={props.video.snippet.thumbnails.medium.url} 
        alt={title}
        className="ui image"
        />
        <div className="content">
          <div className="header">
            {title}
          </div>
        </div>
    </div>
  )
}

export default VideoItem