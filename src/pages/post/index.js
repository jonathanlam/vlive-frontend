import React, { useState, useEffect } from "react";
import ChannelArea from "./../../components/channelarea.js";
import Suggestions from "./suggestions.js";
import VideoContainer from "./videocontainer.js";
import LayoutTop from "../../components/layouttop.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import artist_data from "../../assets/artists.json";

import "../styles.css";

const get_artist_data = (name) => {
  var result = artist_data.filter((obj) => {
    return obj.channel === name;
  });
  if (result.length === 0) return null;
  return result[0];
};
const Post = () => {
  const { post_id } = useParams();
  //const search = data.filter((board_item) => board_item.postId === post_id);
  //if (search.length === 0) return <>No post found</>;

  const [search, setSearch] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.vlivearchive.com/post/${post_id}`)
      .then(function (response) {
        setSearch(response.data);
      })
      .catch(function (error) {
        console.log("wtfffff");
      });
  }, [post_id]);

  if (search === null) return <>loading</>;
  if (search.length === 0) return <>not found</>;
  const channel = search[0];
  const post = search[1];
  const suggestions = search[2];

  const artist = get_artist_data(channel);
  const bucket = artist.bucket;

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
                        to={"/channel/" + channel}
                      >
                        {artist.name} Board
                        <em className="blind">selected</em>
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
            <VideoContainer
              title={post.title}
              postId={post.postId}
              officialVideo={post.officialVideo}
              bucket={bucket}
              author={post.author}
              channel={channel}
              artist={artist}
            />
          </div>
          <div className="layout_right--2_POD">
            <Suggestions
              suggestions={suggestions}
              channel={channel}
              bucket={bucket}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
