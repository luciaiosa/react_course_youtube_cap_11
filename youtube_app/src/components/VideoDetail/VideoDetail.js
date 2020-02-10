import React from "react";
// para ver el video de Youtube, vamos a usar iframe (html tag, is going to attempt to make a request to some outside web site)
// para ver como se usa, ir a youtube / Share/ embed, y mirar el código, especialmente el src, que utiliza el id del video!!

const VideoDetail = ({ video }) => {
  let videoSrc = "/";
  if (!video) {
    return <div>Loading...</div>;
  }
  videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
