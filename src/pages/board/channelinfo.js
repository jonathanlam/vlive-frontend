import React from "react";

const ChannelInfo = ({ artist }) => {
  const thumbnail =
    "https://raw.githubusercontent.com/jonathanlam/vlive-frontend/main/public/static/img/dp/" +
    artist.channel +
    ".png";
  return (
    <>
      <h4 class="info_title--jwsgZ">Channel Information</h4>
      <ul class="info_stars_list--FduI_">
        <li class="info_stars_item--lE7Vk -circle--1DV88">
          <span class="blind">{artist.name}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            class="mask_thumbnail--3lmJn"
          >
            <mask id="channel-circle-thumbnail">
              <g transform="translate(-517.000000, -532.000000) translate(360.000000, 532.000000)">
                <circle
                  cx="11"
                  cy="11"
                  r="11"
                  transform="translate(157.000000, 0.000000)"
                ></circle>
              </g>
            </mask>
            <image
              mask="url(#channel-circle-thumbnail)"
              href={thumbnail}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMinYMin meet"
            ></image>
          </svg>
        </li>
      </ul>
      <dl class="info_list">
        <div class="info_item--7iTKe">
          <dt class="info_item_title--3jI-M">Star's Videos</dt>
          <dd class="info_item_detail---lBwJ">{artist.videoCount}</dd>
        </div>
        <div class="info_item--7iTKe">
          <dt class="info_item_title--3jI-M">Play</dt>
          <dd class="info_item_detail---lBwJ">{artist.fplayCount}</dd>
        </div>
        <div class="info_item--7iTKe">
          <dt class="info_item_title--3jI-M">Like</dt>
          <dd class="info_item_detail---lBwJ">{artist.flikeCount}</dd>
        </div>
        <div class="info_item--7iTKe">
          <dt class="info_item_title--3jI-M">Comments</dt>
          <dd class="info_item_detail---lBwJ">{artist.fcommentCount}</dd>
        </div>
      </dl>
    </>
  );
};
export default ChannelInfo;
