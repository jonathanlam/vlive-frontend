import React from "react";
import ChannelArea from "./channelarea.js";
import ChannelInfo from "./channelinfo.js";
import VideoContainer from "./videocontainer.js";
import LayoutTop from "../../components/layouttop.js";
import { useParams } from "react-router";
import data from "../../assets/itzy_vods.json";

import "../styles.css";
const Post = () => {
  const { post_id } = useParams();
  const search = data.filter((board_item) => board_item.postId === post_id);
  if (search.length === 0) return <>No post found</>;

  const post = search[0];

  const bucket_map = {
    BAE889: "vlive-itzy",
    E1F3A7: "vlive-loona",
    A0ABD1: "vlive-weeekly",
  };

  const bucket = bucket_map[post.channel.channelCode];

  return (
    <>
      <div className="layout--2CJge">
        <LayoutTop />
        <div className="layout_main--2iozc">
          <div className="snb--dI3H2">
            <nav className="nav--Lwe6x">
              <div className="channel_area--3-r0f">
                <ChannelArea />
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
                      <a
                        className="board_link--10CG-"
                        href="/channel/BAE889/board/5745"
                      >
                        ITZY Board<em className="blind">selected</em>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="board_group_item--uTaOQ">
                  <strong className="group_name--2Ufyg">Fan</strong>
                  <ul className="board_list--iksmp">
                    <li className="board_item--8Emtz">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="board_icon--3B72f"
                      >
                        <path
                          fill="#B5B5BD"
                          d="M12 0c3.314 0 6 2.686 6 6v6c0 3.314-2.686 6-6 6H6c-3.314 0-6-2.686-6-6V6c0-3.314 2.686-6 6-6h6zm-.285 5h-5.39l-.114.007c-.446.056-.791.437-.791.898v6.19l.007.114c.056.446.437.791.898.791h4.045l.16-.006c1.168-.081 2.09-1.042 2.09-2.216V5.905l-.007-.114c-.056-.446-.437-.791-.898-.791zM9.47 9.5c.249 0 .45.201.45.45s-.201.45-.45.45H7.22l-.08-.007c-.21-.038-.37-.222-.37-.443 0-.249.201-.45.45-.45zm1.35-2.25c.249 0 .45.201.45.45s-.201.45-.45.45h-3.6l-.08-.007c-.21-.038-.37-.222-.37-.443 0-.249.201-.45.45-.45z"
                        ></path>
                      </svg>
                      <a
                        className="board_link--10CG-"
                        href="/channel/BAE889/board/2196"
                      >
                        MIDZY Board
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="board_group_item--uTaOQ">
                  <strong className="group_name--2Ufyg">Special</strong>
                  <ul className="board_list--iksmp">
                    <li className="board_item--8Emtz">
                      <div className="badge_vliveplus--13ZOr">
                        <em className="badge--3Jtfu vliveplus--25hf- -size14--pHo0H">
                          <span className="blind">VLIVE PLUS</span>
                        </em>
                      </div>
                      <a
                        className="board_link--10CG- -vlive_plus--3X-PI"
                        href="/channel/BAE889/board/5746"
                      >
                        VLIVE+ Board
                      </a>
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
                <h2 className="lnb_pc_title--1lAio">ITZY Board</h2>
              </div>
            </div>
            <VideoContainer
              title={post.title}
              postId={post.postId}
              officialVideo={post.officialVideo}
              bucket={bucket}
            />
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

export default Post;
