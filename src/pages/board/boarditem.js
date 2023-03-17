import React from "react";
import PlayBadgeIcon from "../../components/icons/playbadge";
import PostAuthorDP from "../../components/icons/postAuthorDP";
import PostStarIcon from "../../components/icons/poststar";
import SmallCommentIcon from "../../components/icons/smallcomment";
import SmallHeartIcon from "../../components/icons/smallheart";
import SmallPlayIcon from "../../components/icons/smallplay";
import { Link } from "react-router-dom";

import { formatNum, FMTtimestamp, fmtMSS, get_thumbnail_ext } from "./../util";

const BoardItem = ({ post, channel }) => {
  const postId = post.postId;
  const thumbnail_ext = get_thumbnail_ext(post.officialVideo.thumb);
  const thumbnail_url = `https://vlive-thumbs.s3.us-west-004.backblazeb2.com/${postId}/${postId}-thumb${thumbnail_ext}`;
  const channelUrl = channel.channelAlias
    ? channel.channelAlias
    : channel.channelCode;

  return (
    <>
      <li className="post_item--3Brrv -video--1s9IA">
        <div className="profile_area--2YO97">
          <div className="profile_info--13f_P">
            <Link className="link_profile--2SQHn" to={"/channel/" + channelUrl}>
              <div className="profile_thumbnail--1k1fr">
                <div
                  className="thumbnail_wrap--1h0cv -mask--3jxwe"
                  style={{ width: "30px", height: "30px" }}
                >
                  <PostAuthorDP
                    image_url={`https://api.vlivearchive.com/pfp/${channel.channelCode}.png`}
                  />
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    className="mask_border--3sgzz"
                  >
                    <g stroke="#000" stroke-opacity="0.05">
                      <path d="M15,0.5 C19.0040644,0.5 22.6290644,2.12296778 25.2530483,4.74695167 C27.8770322,7.37093556 29.5,10.9959356 29.5,15 C29.5,15.4138637 29.482673,15.8236796 29.4486026,16.2287386 C28.394426,15.7603521 27.227625,15.5 26,15.5 C23.6527898,15.5 21.5277898,16.4513949 19.9895924,17.9895924 C18.4513949,19.5277898 17.5,21.6527898 17.5,24 C17.5,25.8341082 18.0809505,27.5325085 19.0686818,28.9213493 C17.7781764,29.2980794 16.412669,29.5 15,29.5 C10.9959356,29.5 7.37093556,27.8770322 4.74695167,25.2530483 C2.12296778,22.6290644 0.5,19.0040644 0.5,15 C0.5,10.9959356 2.12296778,7.37093556 4.74695167,4.74695167 C7.37093556,2.12296778 10.9959356,0.5 15,0.5 Z"></path>
                    </g>
                  </svg>
                  <span className="icon_post_writer--3Hu_I">
                    <PostStarIcon />
                    <span className="blind">star</span>
                  </span>
                </div>
              </div>
              <div className="profile_info--AI-HG">
                <div className="writer_area--DbEU6">
                  <em className="writer--pwvK2">{post.author.nickname}</em>
                </div>
                <div className="add_info_area--SkRFe">
                  <div className="add_info--1sRxZ">
                    <span className="upload_time--wtBj9">
                      {FMTtimestamp(post.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Link className="post_area--3dKbo" to={"/post/" + postId}>
          <div className="post_inner--3DzQ8">
            <div className="content_area--24ZuP">
              <div className="post_title--3sJDT">
                <strong className="title_text--3s_ZV">{post.title}</strong>
              </div>
              <div className="post_reaction_area--J_jVq">
                <div className="post_reaction_wrap--2u8Kx">
                  <div className="post_reaction_info--1XiJo">
                    <span className="reaction_item--2lEs_">
                      <span className="blind">play</span>
                      <SmallPlayIcon />
                      <span className="text--1T5Dt">
                        {formatNum(post.officialVideo.playCount)}
                      </span>
                    </span>
                    <span className="reaction_item--2lEs_">
                      <span className="blind">like</span>
                      <SmallHeartIcon />
                      <span className="text--1T5Dt">
                        {formatNum(post.officialVideo.likeCount)}
                      </span>
                    </span>
                    <span className="reaction_item--2lEs_">
                      <span className="blind">comment</span>
                      <SmallCommentIcon />
                      <span className="text--1T5Dt">
                        {formatNum(post.totalCommentCount)}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="post_thumbnail--1guv3">
              <div className="thumbnail_wrap--2t6Rv">
                <div className="thumbnail--2pMaa">
                  <div className="lazyload-wrapper">
                    <span
                      className="covered_image--1rVY7 -lazyload--2r3VM thumbnail--2cQXj"
                      style={{
                        backgroundImage: "url('" + thumbnail_url + "')",
                      }}
                    ></span>
                    <span className="badge_area--1JrzS -bottom--13Qfe">
                      <em className="badge--1S36U -text--kJnBn">
                        <span className="blind">playTime</span>
                        {fmtMSS(post.officialVideo.playTime)}
                      </em>
                    </span>
                    <span className="badge_area--1JrzS -bottom_left--1fhiE">
                      <em className="blind">video</em>
                      <PlayBadgeIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="more_button_area--3k5le">
          <div className="more_option_wrap--2qHGk">
            <button
              type="button"
              className="button_more_option--1klaM -post--UhjTL"
            >
              <span className="blind">More</span>
              <svg
                width="3"
                height="13"
                viewBox="0 0 3 13"
                className="icon_button--3uz1s -more--2CaVp"
              >
                <g fill="#959597" opacity="0.5">
                  <circle cx="1.75" cy="1.25" r="1.25"></circle>
                  <circle cx="1.75" cy="6.25" r="1.25"></circle>
                  <circle cx="1.75" cy="11.25" r="1.25"></circle>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
export default BoardItem;
