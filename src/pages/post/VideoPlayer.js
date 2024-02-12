import React from "react";
//import ReactPlayer from "react-player";
import { Player } from "react-tuby";
import "./player.css";

function formatSubLabel(caption) {
  var label = caption.label;
  if (caption.type === "cp") label += " (official)";
  if (caption.type === "auto") label += " (auto)";
  if (caption.type === "fan") label += " (fan)";
  if (caption.fanName !== "") label += ` by ${caption.fanName}`;
  return label;
}

const VideoPlayer = ({ post, channel, thumbnail_url }) => {
  var video_url = "https://vlive-11.vlivearchive.com/placeholder.mp4";

  if (post?.alt_url?.mirror) video_url = post.alt_url.mirror;

  if (channel.bucket) {
    video_url = `https://${channel.bucket}.vlivearchive.com/${channel.channelAlias}/${post.postId}/${post.postId}-video.mp4`;
  }

  if (post?.alt_url?.primary) video_url = post.alt_url.primary;

  var subtitles = post?.captions || [];

  return (
    //<ReactPlayer
    //  url={video_url}
    //  height="400px"
    //  width="100%"
    //  controls={true}
    //  config={{
    //    file: {
    //      attributes: {
    //        crossOrigin: true,
    //      },
    //      tracks: subtitles.map((e) => ({
    //        kind: "subtitles",
    //        src: `/subtitles/${e.file_name}`,
    //        srcLang: e.language,
    //        label: formatSubLabel(e),
    //      })),
    //    },
    //  }}
    ///>
    <Player
      src={video_url}
      poster={thumbnail_url}
      subtitles={subtitles.map((e) => ({
        url: `/subtitles/${e.file_name}`,
        lang: e.language,
        language: formatSubLabel(e),
      }))}
    />
  );
};

export default VideoPlayer;
