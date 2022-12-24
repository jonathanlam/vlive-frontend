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

const Board = () => {
  const { artist_name } = useParams();
  // use axios to grab from /static/vods/${group}.json
  // loading screen
  // scrolling lazy loading?
  const artist = get_artist_data(artist_name);
  const [vod_list, setVodList] = useState(null);

  useEffect(() => {
    axios
      .get(`/static/vods/vods_${artist_name}.json`)
      .then(function (response) {
        setVodList(response.data);
      })
      .catch(function (error) {});
  }, [artist_name]);

  const [renderNum, setRenderNum] = useState(20);
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
                    <BoardItem
                      post_id={board_item.postId}
                      title={board_item.title}
                      author={board_item.author}
                      createdAt={board_item.createdAt}
                      officialVideo={board_item.officialVideo}
                      artist={artist}
                    />
                  ))}
                </InfiniteScroll>
              </ul>
            </div>
          </div>
          <div className="layout_right--2_POD">
            <div className="layout_info--1d6Aj">
              <div className="info_wrap--2kzZi">
                <ChannelInfo />
              </div>
            </div>
            <button type="button" className="channel_share_button--jm5Vl">
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
    </>
  );
};

export default Board;
