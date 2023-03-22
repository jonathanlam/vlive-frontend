import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ post, channel }) => {
  var video_url = "https://vlive-11.vlivearchive.com/placeholder.mp4";

  if (post?.alt_url?.mirror) video_url = post.alt_url.mirror;

  if (channel.bucket) {
    video_url = `https://${channel.bucket}.vlivearchive.com/${channel.channelAlias}/${post.postId}/${post.postId}-video.mp4`;
  }
  
  // for Google Drive
  if (post?.alt_url?.iframe)
    return (
      <iframe
        src={post.alt_url.iframe}
        title="Video"
        allow="autoplay"
        width="100%"
        height="400px"
      ></iframe>
    );

  if (post?.alt_url?.primary) video_url = post.alt_url.primary;

  var subtitles = post?.subtitles || [];

  

  return (
    <ReactPlayer
      url={video_url}
      height="400px"
      width="100%"
      controls={true}
      config={{
        file: {
          attributes: {
            crossOrigin: true,
          },
          tracks: subtitles.map((e) => ({
            kind: "subtitles",
            src: `/subtitles/${e.file_name}`,
            srcLang: e.name,
            label: e.name,
          })),
        },
      }}
    />
  );
};

export default VideoPlayer;
