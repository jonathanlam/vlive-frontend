import React from "react";
import "./styles1.css";
import "./styles2.css";
import "./styles3.css";
import ArtistCard from "./artistcard.js";
import artist_data from "../../assets/artists.json";
// import { Link } from "react-router-dom";
//import { useTranslation } from "react-i18next";

const Landing = () => {
  const artists = artist_data;
  //const { t } = useTranslation();

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
                  <strong className="HomeComponentView_title__wTRwM">
                    Archived groups
                  </strong>
                  <div className="HomeComponentView_component__oey5Q">
                    <ul className="HomeArtistListSlotView_artist_list__3fPzz">
                      {artists.map((artist, key) => (
                        <ArtistCard artist={artist} key={key} />
                      ))}
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
