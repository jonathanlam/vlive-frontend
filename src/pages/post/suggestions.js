import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatNum, FMTtimestamp, fmtMSS, get_thumbnail_ext } from "./../util";

const SuggestionItem = ({ post, artist }) => {
  const thumbnail_ext = get_thumbnail_ext(post.officialVideo.thumb);
  const postId = post.postId;
  const thumbnail_url = `https://${artist.bucket}.vlivearchive.com/${artist.channel}/${postId}/${postId}-thumb${thumbnail_ext}`;
  return (
    <li className="post_item--3cirM">
      <Link to={"/post/" + post.postId} class="link_post--1dXdh">
        <div class="post_thumbnail--1147c">
          <div class="thumbnail--2pMaa">
            <div class="lazyload-wrapper">
              <span
                class="covered_image--1rVY7 -lazyload--2r3VM thumbnail--1QPef"
                style={{
                  backgroundImage: "url('" + thumbnail_url + "')",
                }}
              ></span>
              <span class="badge_area--1JrzS -bottom--13Qfe">
                <em class="badge--1S36U -text--kJnBn">
                  <span class="blind">playTime</span>
                  {fmtMSS(post.officialVideo.playTime)}
                </em>
              </span>
            </div>
          </div>
        </div>
        <div class="post_content--D8V5r">
          <div class="post_title--3LGKu">
            <strong class="title_text--3DDBL">{post.title}</strong>
          </div>
          <div class="writer_info--1uIIu">
            <em class="writer--2b2Z_">{post.channel.channelName}</em>
            <span class="upload_time--XVzL3">
              {FMTtimestamp(post.createdAt)}
            </span>
          </div>
          <div class="post_reaction_info--i_Pf6">
            <div class="post_reaction_wrap--2u8Kx">
              <div class="post_reaction_info--1XiJo">
                <span class="reaction_item--2lEs_">
                  <span class="blind">play</span>
                  <svg
                    width="9"
                    height="11"
                    viewBox="0 0 9 11"
                    class="icon_reaction--25RS_"
                  >
                    <path
                      fill="#444"
                      d="M.9 9.95v-8.9L7.972 5.5.9 9.95zm7.745-5.104L1.12.11C1.062.074 1 .047.937.028.915.022.892.022.87.018.828.01.786 0 .744 0 .7 0 .658.008.616.016c-.02.003-.04.002-.06.008C.493.04.432.064.375.098.318.132.266.173.219.22.081.363 0 .558 0 .765v9.47c0 .207.081.402.22.544.045.047.098.089.156.122.056.033.115.058.176.074.06.017.123.025.186.025.132 0 .265-.037.382-.11l7.525-4.736C8.865 6.015 9 5.767 9 5.5c0-.268-.135-.516-.355-.654z"
                    ></path>
                  </svg>
                  <span class="text--1T5Dt">
                    {formatNum(post.officialVideo.playCount)}
                  </span>
                </span>
                <span class="reaction_item--2lEs_">
                  <span class="blind">like</span>
                  <svg
                    width="13"
                    height="11"
                    viewBox="0 0 13 11"
                    class="icon_reaction--25RS_"
                  >
                    <path
                      fill="#444"
                      d="M9.343.008C8.51.063 7.735.418 7.142 1.02l-.64.65-.643-.651C5.212.363 4.35 0 3.432 0S1.65.363 1.005 1.02c-1.34 1.358-1.34 3.566-.001 4.927l4.748 4.746c.358.36.921.408 1.335.121l.11-.089.034-.031 4.907-4.905c1.206-1.386 1.135-3.474-.14-4.769C11.352.363 10.488 0 9.571 0l-.228.008zm.228 1.038c.636 0 1.23.25 1.681.708l.128.14c.768.912.774 2.284-.007 3.182L6.49 9.953 1.747 5.21C.811 4.26.812 2.706 1.75 1.754c.45-.458 1.046-.708 1.682-.708.636 0 1.231.25 1.682.708l1.016 1.03c.205.207.54.207.745-.001l1.013-1.03c.45-.457 1.046-.707 1.683-.707z"
                    ></path>
                  </svg>
                  <span class="text--1T5Dt">
                    {formatNum(post.officialVideo.likeCount)}
                  </span>
                </span>
                <span class="reaction_item--2lEs_">
                  <span class="blind">comment</span>
                  <svg
                    width="11px"
                    height="11px"
                    viewBox="0 0 11 11"
                    class="icon_reaction--25RS_"
                  >
                    <path
                      fill="#444"
                      d="M5.5 0C8.53756612 0 11 2.46243388 11 5.5S8.53756612 11 5.5 11c-.91695777 0-1.80211463-.22556492-2.59047101-.64720523L2.875 10.333l-.19709054.06589233-1.22117747.41942606c-.79715492.27906151-1.55986506-.49464483-1.2694221-1.28772376l.33041123-.92310743L.677 8.143l-.01974018-.03381012c-.38524837-.71365255-.60943013-1.50748003-.650414-2.33293386L0 5.5C0 2.46243388 2.46243388 0 5.5 0zm0 1C3.01471863 1 1 3.01471863 1 5.5c0 .93082954.28262045 1.79564953.76673257 2.51333121-.06138403.22053313-.20681608.64566345-.34359844 1.03399111l-.29681304.82715888 1.47271605-.50290832.40498209-.12666013C3.71827023 9.72190879 4.57665927 10 5.5 10 7.98528137 10 10 7.98528137 10 5.5S7.98528137 1 5.5 1zm1.85606063 4c.31379816 0 .56818184.25743628.56818184.57500002 0 .31756375-.25438368.57500003-.56818184.57500003-.31379817 0-.56818184-.25743628-.56818184-.57500003C6.78787879 5.25743628 7.04226246 5 7.35606063 5zm-1.8939394 0c.31379817 0 .56818185.25743628.56818185.57500002 0 .31756375-.25438368.57500003-.56818185.57500003-.31379816 0-.56818184-.25743628-.56818184-.57500003C4.89393939 5.25743628 5.14832307 5 5.46212123 5zM3.56818184 5c.31379817 0 .56818184.25743628.56818184.57500002 0 .31756375-.25438367.57500003-.56818184.57500003C3.25438367 6.15000005 3 5.89256377 3 5.57500002 3 5.25743628 3.25438367 5 3.56818184 5z"
                    ></path>
                  </svg>
                  <span class="text--1T5Dt">
                    {formatNum(post.officialVideo.commentCount)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

const Suggestions = ({ suggestions, artist }) => {
  const [autoplay, setAutoplay] = useState(true);
  const handleAutoplay = () => {
    setAutoplay(!autoplay);
  };
  return (
    <>
      <div class="video_right--3clX5">
        <div class="video_list_wrap--QgzEr -normal--N2oq-">
          <div class="title_area--3RgUQ">
            <div class="list_paging--2e1Ym">
              <span class="default_text--2zKUi">Suggestions</span>
              <div class="move_arrow_area--13t_M">
                <button
                  type="button"
                  disabled=""
                  id=""
                  class="button_move--3W8QT is_dimmed--1NIaU"
                >
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    class="icon_arrow---B-1C"
                  >
                    <path
                      fill="none"
                      stroke="#2B2B2E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M.99975639 1.00068078L5.99970844 6.0501303.99975639 11.00058488"
                    ></path>
                  </svg>
                  <span class="blind">prev</span>
                </button>
                <button type="button" id="" class="button_move--3W8QT">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    class="icon_arrow---B-1C"
                  >
                    <path
                      fill="none"
                      stroke="#2B2B2E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M.99975639 1.00068078L5.99970844 6.0501303.99975639 11.00058488"
                    ></path>
                  </svg>
                  <span class="blind">next</span>
                </button>
              </div>
            </div>
            <div class="auto_playing--33nsO" onClick={handleAutoplay}>
              <label
                class={`button_switch--1qhU6 ${
                  autoplay && "is_checked--fw8U2"
                }`}
              >
                <span class="button_text--3Rm8s">Autoplay</span>
              </label>
            </div>
          </div>
          <ul class="video_post_list--3xf_l">
            {suggestions.map((post, key) => (
              <SuggestionItem post={post} artist={artist} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Suggestions;
