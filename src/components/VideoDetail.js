import React from "react"
import parse from "html-react-parser"

const VideoDetail = (props) => {
  if(!props.video){
    return <div>Loading...</div>
  } else {
    const title = parse(props.video.snippet.title)
    return (
      <div>
        <div className="ui embed">
          <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} title={props.video.snippet.title}/>
        </div>
        <div className=" ui segment">
          <h4 className="ui header">
            {title}
          </h4>
          <p>
            {props.video.snippet.description}
          </p>
        </div>
      </div>
    )

  }
}

export default VideoDetail