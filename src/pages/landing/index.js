import React, { useState, useEffect } from "react";
import "./styles1.css";
import "./styles2.css";
import "./styles3.css";
import ArtistCard from "./artistcard.js";
import axios from "axios";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

// import { Link } from "react-router-dom";
//import { useTranslation } from "react-i18next";

import InfiniteScroll from "react-infinite-scroll-component";

const Landing = () => {
  //const { t } = useTranslation();
  document.title = "V LIVE";

  const [channelList, setChannelList] = React.useState([]);

  const [renderNum, setRenderNum] = React.useState(20);
  const [hasMore, setHasMore] = useState(true);

  const fetchNextData = () => {
    setRenderNum(renderNum + 20);
  };

  useEffect(() => {
    axios
      .get(`https://api.vlivearchive.com/channels?page=${renderNum / 20}`)
      .then(function (response) {
        setChannelList((channelList) => [...channelList, ...response.data]);
      })
      .catch(function (error) {});
  }, [renderNum]);

  if (channelList.length === 0) {
    return "Loading...";
  }

  const handleSearch = (value) => {
    setHasMore(value.length === 0);

    if (value.length === 1) return;
    axios
      .get(`https://api.vlivearchive.com/channels/search?q=${value}`)
      .then(function (response) {
        setChannelList(response.data);
      })
      .catch(function (error) {});
  };

  return (
    <>
      <div className="GlobalLayoutView_layout_container__kUnkV GlobalLayoutView_-min_width_745__06yCp">
        {/* <div className="GlobalLayoutView_header__1UkFL">
          <header className="header">
            <div className="HeaderView_content__FOBEB">
              <div className="HeaderView_service__1gUcd">
                <h1 className="logo_wrap">
                  <a href="/" className="HeaderView_logo__esVJ4"></a>
                </h1>
              </div>
            </div>
          </header>
        </div> */}
        <div className="body">
          <div className="HomePageView_container__Gk7q3">
            <div className="HomePageView_home_main__JwIMd">
              <div>
                <div className="HomeComponentView_component_area__nBJJk">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/MegaUpload_FBI-Banner.jpg" />
                  <br><br><br>
                  <strong className="HomeComponentView_title__wTRwM">
                    April Fools! All the videos are still here
                  </strong>
                  <TextField
                    label="Search"
                    sx={{ mt: 2 }}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <div className="HomeComponentView_component__oey5Q">
                    <ul>
                      <InfiniteScroll
                        className="HomeArtistListSlotView_artist_list__3fPzz"
                        dataLength={renderNum}
                        next={fetchNextData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                      >
                        {channelList.map((channel, key) => (
                          <ArtistCard channel={channel} key={key} />
                        ))}
                      </InfiniteScroll>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
