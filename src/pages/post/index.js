import React, { useState, useEffect } from "react";
import ChannelArea from "./../../components/channelarea.js";
import Suggestions from "./suggestions.js";
import VideoContainer from "./videocontainer.js";
import LayoutTop from "../../components/layouttop.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Adsense } from "@ctrl/react-adsense";

import "../styles.css";
import "./heart.css";

const Heart = () => {
  const flows = ["flowOne", "flowTwo", "flowThree"];

  const colours = [
    "#847bb9",
    "#FF5733",
    "#fce473",
    "#f68b39",
    "#ed6c63",
    "#97cd76",
    "#35b1d1",
  ];
  const colour = colours[Math.floor(Math.random() * 6)];

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const ttl = (Math.random() * 2 + 1.2).toFixed(1) * 900;
    const timer = setTimeout(() => {
      setVisible(false);
    }, ttl);
    return () => clearTimeout(timer);
  }, []);

  const flow = flows[Math.floor(Math.random() * 3)];

  if (!visible) return <div></div>;

  return (
    <div
      className="heart"
      style={{
        color: colour,
        fontSize: Math.floor(Math.random() * (50 - 22) + 22),
        animation: `${flow} 3s linear`,
      }}
    >
      <i className="fa fa-heart"></i>
    </div>
  );
};

const Hearts = () => {
  const [hearts, setHearts] = useState([]);

  function addHeart() {
    setHearts([...hearts, <Heart />]);
  }

  return (
    <>
      <Fab
        size="medium"
        sx={{
          backgroundColor: "#ee0520",
          //color: "danger",
          position: "fixed",
          bottom: 20,
          right: 20,
          display: { xs: "block", md: "none" },
        }}
        onClick={addHeart}
      >
        <FavoriteIcon />
      </Fab>
      <div
        style={{
          height: "600px",
          position: "fixed",
          bottom: 20,
          right: 80,
        }}
      >
        {hearts.map((h, key) => h)}
      </div>
    </>
  );
};

const Post = () => {
  const { post_id } = useParams();
  const { video_seq } = useParams();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    var url = "";
    if (post_id) {
      url = `https://api.vlivearchive.com/post/${post_id}`;
    } else if (video_seq) {
      url = `https://api.vlivearchive.com/video/${video_seq}`;
    }

    axios
      .get(url)
      .then(function (response) {
        setSearch(response.data);
      })
      .catch(function (error) {
        console.log("wtfffff");
      });
  }, [post_id, video_seq]);

  if (search === null) return <>loading</>;
  if (search === "not found") return <>not found</>;
  const post = search.post;
  const artist = search.artist;
  const suggestions = search.suggestions;
  const alt_url = search.youtube;

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
              author={post.author}
              artist={artist}
              alt_url={alt_url}
            />
          </div>
          <div className="layout_right--2_POD">
            <Suggestions suggestions={suggestions} artist={artist} />
          </div>

          <Hearts />
          <Adsense client="ca-pub-3850710731106550" slot="6249513304" />
        </div>
      </div>
    </>
  );
};

export default Post;
