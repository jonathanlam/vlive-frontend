import React, { useState, useEffect } from "react";
import ChannelArea from "./../../components/channelarea.js";
import ChannelInfo from "./channelinfo.js";
import BoardItem from "./boarditem.js";
import LayoutTop from "./../../components/layouttop.js";
import { useParams } from "react-router";
import "../styles.css";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

import InfiniteScroll from "react-infinite-scroll-component";
import { SettingsModal, ShareModal } from "./modals";
import BoardGroupList from "./../../components/BoardGroupList";

const BoardItemSkeleton = () => {
  return (
    <li className="post_item--3Brrv -video--1s9IA">
      <Box
        sx={{
          mr: 3,
          ml: 3,
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ mr: 2 }}>
          <Skeleton variant="circular" width={30} height={30} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Skeleton height={30} width={100} />
        </Box>
      </Box>
      <Box sx={{ ml: 3, mr: 3, pb: 2, display: "flex", alignItems: "center" }}>
        <Box width="90%">
          <Skeleton width="80%" height={40} />
          <Skeleton width="30%" height={40} />
        </Box>
        <Skeleton variant="rounded" width={80} height={80} />
      </Box>
    </li>
  );
};

const PostList = ({ posts, renderNum, fetchNextData, channel }) => {
  if (posts == null)
    return (
      <>
        <BoardItemSkeleton />
        <BoardItemSkeleton />
        <BoardItemSkeleton />
      </>
    );

  if (posts.length === 0) return <div>no posts in this channel</div>;

  return (
    <InfiniteScroll
      dataLength={renderNum}
      next={fetchNextData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {posts.map((board_item, key) => (
        <BoardItem post={board_item} channel={channel} key={key} />
      ))}
    </InfiniteScroll>
  );
};

const Board = () => {
  var { channelCode } = useParams();
  var { board_id } = useParams();
  const [activeBoard, setActiveBoard] = useState(board_id);

  const [channel, setChannel] = useState(null);
  const [boards, setBoards] = useState(null);
  const [vod_list, setVodList] = useState(null);
  const [vod_list_original, setVodListOriginal] = useState(null);
  const [liveOnly, setLiveOnly] = useState(true);
  const [year, setYear] = useState("All Years");
  const [sortBy, setSortBy] = useState("Newest");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.vlivearchive.com/channel/${channelCode}`)
      .then(function (response) {
        setChannel(response.data.channel);
        setBoards(response.data.boards);
        setActiveBoard(response.data.boards[0].boardId);
        document.title = "VLIVE - " + response.data.channel.channelName;
      })
      .catch(function (error) {});
  }, [channelCode]);

  useEffect(() => {
    if (activeBoard == null) return;

    setVodList(null);
    axios
      .get(`https://api.vlivearchive.com/board/${activeBoard}`)
      .then(function (response) {
        // to do: set current board, which will be used to highlight the active board
        setVodList(
          response.data.posts
            .filter(
              (post) =>
                "badges" in post.officialVideo &&
                post.officialVideo.badges.includes("LIVE_TO_VOD")
            )
            .sort((a, b) => b.createdAt - a.createdAt)
        );
        setVodListOriginal(response.data.posts);
      })
      .catch(function (error) {});
  }, [activeBoard]);

  const run_filter = () => {
    if (vod_list_original == null) return;

    var updated_list = [...vod_list_original];
    if (liveOnly)
      updated_list = vod_list_original.filter(
        (post) =>
          "badges" in post.officialVideo &&
          post.officialVideo.badges.includes("LIVE_TO_VOD")
      );

    // filter by year
    if (year === "2022") {
      updated_list = updated_list.filter(
        (vid) => vid.createdAt >= 1640995200000 && vid.createdAt < 1672531200000
      );
    } else if (year === "2021") {
      updated_list = updated_list.filter(
        (vid) => vid.createdAt >= 1609459200000 && vid.createdAt < 1640995200000
      );
    } else if (year === "2020") {
      updated_list = updated_list.filter(
        (vid) => vid.createdAt >= 1577836800000 && vid.createdAt < 1609459200000
      );
    } else if (year === "2019") {
      updated_list = updated_list.filter(
        (vid) => vid.createdAt >= 1546300800000 && vid.createdAt < 1577836800000
      );
    } else if (year === "2018") {
      updated_list = updated_list.filter(
        (vid) => vid.createdAt >= 1514764800000 && vid.createdAt < 1546300800000
      );
    } else if (year === "2017 and earlier") {
      updated_list = updated_list.filter(
        (vid) => vid.createdAt < 1514764800000
      );
    }

    // sort by oldest, newest, most popular
    if (sortBy === "Newest") {
      updated_list = updated_list.sort((a, b) => b.createdAt - a.createdAt);
    } else if (sortBy === "Oldest") {
      updated_list = updated_list.sort((a, b) => a.createdAt - b.createdAt);
    } else if (sortBy === "Most popular") {
      updated_list = updated_list.sort(
        (a, b) => b.officialVideo.likeCount - a.officialVideo.likeCount
      );
    }

    if (searchText !== "") {
      updated_list = updated_list.filter((vid) =>
        vid?.title?.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setVodList(updated_list);
  };

  useEffect(run_filter, [liveOnly]);

  const [renderNum, setRenderNum] = useState(20);

  const [shareOpen, setShareOpen] = useState(false);
  const handleShareOpen = () => {
    setShareOpen(!shareOpen);
  };

  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen = () => {
    setSettingsOpen(!settingsOpen);
  };

  if (channel == null) return "loading...";

  const data2 = vod_list?.slice(0, renderNum);
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
                <ChannelArea channel={channel} />
              </div>
              <ul className="board_group_list--3BSLj">
                <BoardGroupList
                  channel={channel}
                  boards={boards}
                  activeBoard={activeBoard}
                  setActiveBoard={setActiveBoard}
                />
              </ul>
            </nav>
          </div>
          <div className="snb_dimmed--IZGKU"></div>
          <div className="layout_content--3-hGQ">
            <div className="lnb--3RTnS -right_menu_text--23eET">
              <div className="lnb_inner--1EWFM">
                <h2 className="lnb_pc_title--1lAio">
                  {channel.channelName} Board
                </h2>
              </div>
            </div>
            <div className="board_container--jTnd3">
              <div>
                <div className="star_option--3u_Kn">
                  <div className="option_sort--3CNHr">
                    <div className="option_sort_inner--3qFbz">
                      <button
                        type="button"
                        className={`option_button--aH3-H ${
                          !liveOnly && "is_active--j3lJ2"
                        }`}
                        onClick={() => setLiveOnly(false)}
                      >
                        ALL
                      </button>
                      <button
                        type="button"
                        className={`option_button--aH3-H ${
                          liveOnly && "is_active--j3lJ2"
                        }`}
                        onClick={() => setLiveOnly(true)}
                      >
                        Live Streams
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
                      <SettingsModal
                        setSettingsOpen={setSettingsOpen}
                        run={run_filter}
                        year={year}
                        setYear={setYear}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        searchText={searchText}
                        setSearchText={setSearchText}
                      />
                    )}
                  </div>
                </div>
              </div>
              <ul className="post_list--1l_nP">
                <PostList
                  posts={data2}
                  renderNum={renderNum}
                  fetchNextData={fetchNextData}
                  channel={channel}
                />
              </ul>
            </div>
          </div>
          <div className="layout_right--2_POD">
            <div className="layout_info--1d6Aj">
              <div className="info_wrap--2kzZi">
                <ChannelInfo channel={channel} />
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
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
        <ShareModal group={channelCode} closeFn={handleShareOpen} />
      )}
    </>
  );
};

export default Board;
