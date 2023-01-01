import React, { useState, useEffect } from "react";
import ChannelArea from "./../../components/channelarea.js";
import ChannelInfo from "./channelinfo.js";
import BoardItem from "./boarditem.js";
import LayoutTop from "./../../components/layouttop.js";
import { useParams } from "react-router";
import "../styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import artist_data from "../../assets/artists.json";

import InfiniteScroll from "react-infinite-scroll-component";

const get_artist_data = (name) => {
  var result = artist_data.filter((obj) => {
    return obj.channel === name;
  });
  if (result.length === 0) return null;
  return result[0];
};

const SettingsModal = ({ setSettingsOpen }) => {
  const handleClose = () => {
    setSettingsOpen(false);
  };

  const yearOptions = [
    "All Years",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017 and earlier",
  ];
  const [year, setYear] = useState("All Years");

  return (
    <div class="modal--1N199">
      <div class="modal_wrap--1CX43 is_fixed--4RKjs">
        <div class="modal_main--Zh78R">
          <div class="modal_header--3NePP">
            <div class="header_inner--2mKxp">
              <h3 class="header_title--3U_rm">Options</h3>
            </div>
          </div>
          <div class="modal_content--1N9Ky">
            <div class="content_inner--KDiaa">
              <div class="option_list--BvEwT -modal--Zu36t">
                <strong class="option_group--2XSCk">Sort by</strong>
                <ul>
                  <li class="option_item--1XsJy">
                    <button
                      type="button"
                      class="option_button--xMcVN is_select--1857x"
                    >
                      <span class="option_button_inner--2I_uR">
                        <span class="option_title--X6IJe">Newest</span>
                      </span>
                      <span class="option_check--T2a2O">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#8D54E6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            d="M4.5 10.553L9.699 15.45 20.25 5.5"
                          ></path>
                        </svg>
                        <span class="blind">selected</span>
                      </span>
                    </button>
                  </li>
                  <li class="option_item--1XsJy">
                    <button type="button" class="option_button--xMcVN">
                      <span class="option_button_inner--2I_uR">
                        <span class="option_title--X6IJe">Oldest</span>
                      </span>
                    </button>
                  </li>
                  <li class="option_item--1XsJy">
                    <button type="button" class="option_button--xMcVN">
                      <span class="option_button_inner--2I_uR">
                        <span class="option_title--X6IJe">Most popular</span>
                      </span>
                      <p class="option_description--3sfQ4">
                        The "Most Popular" points are updated every 6 hours.
                      </p>
                    </button>
                  </li>
                </ul>
                <strong class="option_group--2XSCk">By year</strong>
                <ul>
                  {yearOptions.map((yearmenu, key) => (
                    <li class="option_item--1XsJy">
                      <button
                        type="button"
                        class={`option_button--xMcVN ${
                          year === yearmenu && "is_select--1857x"
                        }`}
                        onClick={() => setYear(yearmenu)}
                      >
                        <span class="option_button_inner--2I_uR">
                          <span class="option_title--X6IJe">{yearmenu}</span>
                        </span>
                        {year === yearmenu && (
                          <span class="option_check--T2a2O">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="none"
                                stroke="#8D54E6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.5"
                                d="M4.5 10.553L9.699 15.45 20.25 5.5"
                              ></path>
                            </svg>
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="modal_footer--1fc6a">
            <button
              type="button"
              class="footer_button--1SsnD -cancel--24aAy"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="button"
              class="footer_button--1SsnD -ok--1d_jI"
              onClick={handleClose}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareModal = ({ group, closeFn }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div class="modal--1N199" style={{ display: "flex" }}>
      <div class="modal_wrap--1CX43">
        <div class="modal_main--Zh78R">
          <div class="modal_header--3NePP">
            <div class="header_inner--2mKxp">
              <h3 class="header_title--3U_rm">Share</h3>
            </div>
          </div>
          <div class="modal_content--1N9Ky">
            <div class="content_inner--KDiaa">
              <ul class="share_button_list--1EC9R">
                <li class="share_button_item--1PMKT">
                  <button
                    type="button"
                    class="share_button--1MvYV -facebook"
                    onClick={() =>
                      openInNewTab(
                        `https://www.facebook.com/sharer/sharer.php?u=https%3A//www.vlivearchive.com/channel/${group}`
                      )
                    }
                  >
                    <span class="share_icon--3W0Mr">
                      <span class="icon_share--3jEj- -facebook--9WQdh">
                        <svg width="11" height="19" viewBox="0 0 11 19">
                          <g fill="none">
                            <path d="M-9-4h28v28H-9z"></path>
                            <path
                              fill="#2B2B2E"
                              d="M2.94 18.104l.023-7.981H1.316c-.204 0-.369-.165-.369-.368V7.273c0-.203.165-.368.369-.368h1.647v-1.93c0-2.624.974-4.186 4.208-4.186h2.618c.204 0 .369.165.369.369v2.456c0 .204-.165.368-.369.368H8.346c-1.26 0-1.343.475-1.343 1.314l-.005 1.609h2.637c.204 0 .369.165.369.368 0 .014-.001.028-.003.041l-.275 2.481c-.02.187-.178.328-.366.328H6.998v7.982c0 .204-.165.369-.369.369h-3.32c-.204 0-.37-.165-.37-.369z"
                            ></path>
                          </g>
                        </svg>
                        <span class="blind">facebook</span>
                      </span>
                    </span>
                    <span class="share_title--xhVWa">Facebook</span>
                  </button>
                </li>
                <li class="share_button_item--1PMKT">
                  <button type="button" class="share_button--1MvYV -twitter">
                    <span class="share_icon--3W0Mr">
                      <span class="icon_share--3jEj- -twitter--2WR-K">
                        <svg width="18" height="14" viewBox="0 0 18 14">
                          <g fill="none">
                            <path
                              fill="#2B2B2E"
                              d="M15.214 2.214c.652-.397 1.166-1.004 1.45-1.729.028-.074 0 0 0 0 .043-.125-.057-.146-.115-.113 0 0 .065-.037 0 0-.62.346-1.297.6-2.015.743C13.9.43 12.997 0 11.996 0 10.077 0 8.52 1.583 8.52 3.534c0 .277.03.546.09.805C5.842 4.198 3.376 2.902 1.665.912c-.076-.088 0 0 0 0-.123-.147-.294-.129-.39.066l-.017.04c-.184.43-.286.907-.286 1.406 0 1.225.614 2.307 1.547 2.941-.45-.013-.88-.117-1.274-.29-.103-.045 0 0 0 0-.166-.083-.298.012-.293.139 0 0-.006-.081 0 0 .108 1.602 1.267 2.911 2.782 3.22-.292.082-.599.124-.916.124-.224 0-.292-.019-.292-.019-.2-.024-.31.107-.24.286 0 0-.047-.108 0 0 .527 1.23 1.725 2.098 3.125 2.123-1.19.949-2.69 1.514-4.318 1.514-.43 0-.12.436-.12.436C2.393 13.701 3.85 14 5.592 14c6.396 0 9.893-5.385 9.893-10.055 0-.154-.003-.308-.01-.458.601-.441 1.132-.978 1.568-1.587.057-.08 0 0 0 0 .092-.134.013-.176-.052-.149 0 0 .073-.03 0 0-.56.23-1.156.387-1.778.463z"
                            ></path>
                            <path d="M-6-7h28v28H-6z"></path>
                          </g>
                        </svg>
                        <span class="blind">twitter</span>
                      </span>
                    </span>
                    <span class="share_title--xhVWa">Twitter</span>
                  </button>
                </li>
                <li class="share_button_item--1PMKT">
                  <button type="button" class="share_button--1MvYV -tumblr">
                    <span class="share_icon--3W0Mr">
                      <span class="icon_share--3jEj- -tumblr--2uQkT">
                        <svg width="11" height="18" viewBox="0 0 11 18">
                          <defs>
                            <path
                              id="70t5x6wxsa"
                              d="M0 0h10.609v18.738H0z"
                            ></path>
                          </defs>
                          <g fill="none">
                            <path d="M-8-5h28v28H-8z"></path>
                            <g transform="translate(.5 -.5)">
                              <mask id="h0on0ajq5b" fill="#fff"></mask>
                              <path
                                fill="#2B2B2E"
                                d="M7.35 18.5c-2.656 0-4.636-1.393-4.636-4.725V8.44H.3V5.55C2.956 4.847 4.067 2.517 4.196.5h2.758v4.581h3.218V8.44H6.954v4.647c0 1.392.69 1.874 1.788 1.874H10.3v3.54H7.35z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span class="blind">tumblr</span>
                      </span>
                    </span>
                    <span class="share_title--xhVWa">Tumblr</span>
                  </button>
                </li>
                <li class="share_button_item--1PMKT">
                  <button type="button" class="share_button--1MvYV -link">
                    <span class="share_icon--3W0Mr">
                      <span class="icon_share--3jEj- -link--1GzJ_">
                        <svg width="19px" height="19px" viewBox="0 0 19 19">
                          <g transform="translate(-5 -4)" fill="none">
                            <path d="M0 0h28v28H0z"></path>
                            <path
                              fill="#2B2B2E"
                              d="M15.05222963 6.4705631c1.96548299-1.96548298 5.08924423-2.05558429 6.97822236-.16660615 1.83926818 1.83926817 1.80224845 4.849186-.01533453 6.82068985l-.15127163.1575325-2.21495981 2.21495981c-.3319457.3319457-.8701359.33194563-1.20208153 0-.30641136-.30641136-.32998149-.78855777-.07071032-1.12200529l.07071032-.08007623 2.2149598-2.21495981c1.31660554-1.31660553 1.37568848-3.364977.16660618-4.5740593-1.16738981-1.16738981-3.11718472-1.15256617-4.4353128.03489183l-.1387465.13171433-2.22966403 2.22966402c-.33194562.33194563-.8701359.33194563-1.20208153 0-.30641137-.30641137-.32998148-.78855776-.07071032-1.12200529l.07071032-.08007624 2.22966402-2.22966402zm-5.3549416 5.35448038c.33194569-.3319457.87013588-.33194564 1.20208152 0 .3064114.3064114.32998146.78855774.0707103 1.12200525l-.07071026.08007631-2.72695525 2.72695525c-1.31660551 1.31660551-1.37568844 3.36497695-.1666062 4.5740592 1.16738981 1.1673898 3.11718472 1.15256615 4.43531276-.03489181l.1387465-.13171432 2.730476-2.730476c.33194563-.33194563.87013592-.33194563 1.20208154 0 .30641143.30641142.32998149.78855777.07071032 1.12200528l-.07071032.08007624-2.730476 2.730476c-1.96548298 1.96548298-5.08924412 2.05558434-6.97822232.16660613-1.83926818-1.83926818-1.80224843-4.84918593.01533456-6.82068978l.1512716-.1575325 2.72695525-2.72695525z"
                            ></path>
                            <rect
                              fill="#2B2B2E"
                              transform="rotate(-45 14.29699 13.895845)"
                              x="10.0658406"
                              y="13.0458445"
                              width="8.46229986"
                              height="1.7"
                              rx="0.85"
                            ></rect>
                          </g>
                        </svg>
                        <span class="blind">link</span>
                      </span>
                    </span>
                    <span class="share_title--xhVWa">Copy Link</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal_footer--1fc6a">
            <button
              type="button"
              class="footer_button--1SsnD -cancel--24aAy"
              onClick={closeFn}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Board = () => {
  const { channel_name } = useParams();
  // use axios to grab from /static/vods/${group}.json
  // loading screen
  // scrolling lazy loading?
  const artist = get_artist_data(channel_name);
  const [vod_list, setVodList] = useState(null);

  useEffect(() => {
    axios
      .get(`/static/vods/vods_${channel_name}.json`)
      .then(function (response) {
        setVodList(response.data);
      })
      .catch(function (error) {});
  }, [channel_name]);

  const [renderNum, setRenderNum] = useState(20);

  const [shareOpen, setShareOpen] = useState(false);
  const handleShareOpen = () => {
    setShareOpen(!shareOpen);
  };

  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen = () => {
    setSettingsOpen(!settingsOpen);
  };

  if (vod_list == null) return "loading...";

  const data2 = vod_list.slice(0, renderNum);
  const fetchNextData = () => {
    setRenderNum(renderNum + 20);
  };

  return (
    <>
      <div className="layout--2CJge">
        <LayoutTop />
        <div className="layout_main--2iozc">
          <div className="snb--dI3H2">
            <nav className="nav--Lwe6x">
              <div className="channel_area--3-r0f">
                <ChannelArea artist={artist} />
              </div>
              <ul className="board_group_list--3BSLj">
                <li className="board_group_item--uTaOQ">
                  <strong className="group_name--2Ufyg">Official</strong>
                  <ul className="board_list--iksmp">
                    <li className="board_item--8Emtz is_active--3yXYJ">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="board_icon--3B72f"
                      >
                        <path
                          fill="#B5B5BD"
                          d="M12 0c3.314 0 6 2.686 6 6v6c0 3.314-2.686 6-6 6H6c-3.314 0-6-2.686-6-6V6c0-3.314 2.686-6 6-6h6zm-.66 10.303l-1.887 1.373.648.436 1.165.78c.11.075.248.096.376.06.24-.068.38-.319.31-.559l-.376-1.325-.236-.765zm-2.19-5.73c-.235-.082-.493.042-.576.277l-.872 2.48H4.897c-.138 0-.269.063-.354.171-.156.196-.123.48.073.636l2.156 1.711-.706 2.482c-.037.132-.012.275.068.387.146.203.429.25.632.104l6.496-4.671c.118-.085.188-.222.188-.367 0-.25-.202-.453-.452-.453h-2.699l-.871-2.48c-.046-.129-.148-.23-.277-.276z"
                        ></path>
                      </svg>
                      <Link
                        className="board_link--10CG-"
                        to={"/channel/" + artist.channel}
                      >
                        {artist.name} Board<em className="blind">selected</em>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="snb_dimmed--IZGKU"></div>
          <div className="layout_content--3-hGQ">
            <div className="lnb--3RTnS -right_menu_text--23eET">
              <div className="lnb_inner--1EWFM">
                <h2 className="lnb_pc_title--1lAio">{artist.name} Board</h2>
              </div>
            </div>
            <div className="board_container--jTnd3">
              <div>
                <div className="star_option--3u_Kn">
                  <div className="option_sort--3CNHr">
                    <div className="option_sort_inner--3qFbz">
                      <button
                        type="button"
                        className="option_button--aH3-H is_active--j3lJ2"
                      >
                        ALL<em className="blind">Selected</em>
                      </button>
                      <button type="button" className="option_button--aH3-H">
                        Videos
                      </button>
                      <button type="button" className="option_button--aH3-H">
                        Images
                      </button>
                      <button type="button" className="option_button--aH3-H">
                        Star's Pick
                      </button>
                    </div>
                  </div>
                  <div className="option_setting--1O1Gj">
                    <div
                      role="button"
                      tabindex="0"
                      className="role_button--3yKgf setting_button--1aIh4"
                      aria-disabled="false"
                      onClick={handleSettingsOpen}
                    >
                      <div className="tooltip_wrap--1G2tM">
                        <div className="">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            className="setting_icon--2WE-_"
                          >
                            <path
                              fill="#666"
                              d="M8.25 16C9.769 16 11 17.231 11 18.75S9.769 21.5 8.25 21.5c-1.456 0-2.648-1.132-2.744-2.564L5.5 18.75c0 .258.03.51.087.75H3.75c-.414 0-.75-.336-.75-.75 0-.38.282-.693.648-.743L3.75 18h1.837c-.043.183-.07.37-.082.564C5.602 17.132 6.794 16 8.25 16zm0 1.5c-.69 0-1.25.56-1.25 1.25S7.56 20 8.25 20s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm14 .5c.414 0 .75.336.75.75 0 .38-.282.693-.648.743l-.102.007H11.913c.057-.24.087-.492.087-.75s-.03-.51-.087-.75H22.25zm-6-8c1.458 0 2.652 1.135 2.744 2.57l.006.18c0-.258-.03-.51-.087-.75h3.337c.414 0 .75.336.75.75 0 .38-.282.693-.648.743l-.102.007h-3.337c.043-.184.071-.374.082-.57-.093 1.435-1.287 2.57-2.745 2.57-1.519 0-2.75-1.231-2.75-2.75S14.731 10 16.25 10zm0 1.5c-.69 0-1.25.56-1.25 1.25S15.56 14 16.25 14s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm-12.5.5h8.837c-.057.24-.087.492-.087.75s.03.51.087.75H3.75c-.414 0-.75-.336-.75-.75 0-.38.282-.693.648-.743L3.75 12zm4.5-8C9.769 4 11 5.231 11 6.75S9.769 9.5 8.25 9.5c-1.456 0-2.648-1.132-2.744-2.564L5.5 6.75c0 .258.03.51.087.75H3.75c-.414 0-.75-.336-.75-.75S3.336 6 3.75 6h1.837c-.043.183-.07.371-.082.564C5.602 5.132 6.794 4 8.25 4zm0 1.5C7.56 5.5 7 6.06 7 6.75S7.56 8 8.25 8 9.5 7.44 9.5 6.75 8.94 5.5 8.25 5.5zm14 .5c.414 0 .75.336.75.75s-.336.75-.75.75H11.913c.057-.24.087-.492.087-.75s-.03-.51-.087-.75H22.25z"
                            ></path>
                          </svg>
                        </div>
                        <span className="tooltip--1_jyV">
                          <span className="tooltip_text--29NRL">Set</span>
                        </span>
                      </div>
                    </div>
                    {settingsOpen && (
                      <SettingsModal setSettingsOpen={setSettingsOpen} />
                    )}
                  </div>
                </div>
              </div>
              <ul className="post_list--1l_nP">
                <InfiniteScroll
                  dataLength={renderNum}
                  next={fetchNextData}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                >
                  {data2.map((board_item, key) => (
                    <BoardItem post={board_item} artist={artist} />
                  ))}
                </InfiniteScroll>
              </ul>
            </div>
          </div>
          <div className="layout_right--2_POD">
            <div className="layout_info--1d6Aj">
              <div className="info_wrap--2kzZi">
                <ChannelInfo artist={artist} />
              </div>
            </div>
            <button
              type="button"
              className="channel_share_button--jm5Vl"
              onClick={handleShareOpen}
            >
              Share this channel
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="icon_button--3GCg5"
              >
                <g
                  stroke="#2B2B2E"
                  stroke-width="1.6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14.208 6.3L16.9 3.604 14.2.9"></path>
                  <path d="M16.17 3.605h-1.56c-3.103 0-5.619 2.516-5.619 5.62"></path>
                  <path d="M16 9.225V14.4c0 .994-.806 1.8-1.8 1.8H3.4c-.994 0-1.8-.806-1.8-1.8V4.5c0-.994.806-1.8 1.8-1.8h2.712"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {shareOpen && (
        <ShareModal group={channel_name} closeFn={handleShareOpen} />
      )}
    </>
  );
};

export default Board;
