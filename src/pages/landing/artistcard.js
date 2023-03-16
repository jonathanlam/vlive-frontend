import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = ({ channel }) => {
  return (
    <>
      <li className="HomeArtistListSlotView_artist_item__a6gAX">
        <Link
          className="HomeArtistListSlotView_artist_link__Mjm6r"
          to={"/channel/" + channel.channelCode}
        >
          <div className="HomeArtistListSlotView_artist_cover_wrap__TGsNP">
            <img
              src={
                "https://api.vlivearchive.com/pfp/" +
                channel.channelCode +
                ".png"
              }
              width="208"
              height="208"
              className="HomeArtistListSlotView_cover_img__a2krk"
              alt=""
            />
          </div>
          <div className="HomeArtistListSlotView_artist_thumb_wrap__du30B">
            <div
              className="ProfileThumbnailView_thumbnail_area__u25Uf ProfileThumbnailView_-community__+PkFD"
              style={{ width: "43px", height: "43px" }}
            >
              <div className="ProfileThumbnailView_thumbnail_wrap__ZgeTf">
                <div
                  style={{
                    aspectRatio: "auto 43 / 43",
                    contentVisibility: "auto",
                    containIntrinsicSize: "43px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={
                      "https://api.vlivearchive.com/pfp/" +
                      channel.channelCode +
                      ".png"
                    }
                    width="43"
                    height="43"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="HomeArtistListSlotView_artist_text_wrap__6GDpJ">
            <strong className="HomeArtistListSlotView_artist_name__RFLuB">
              <div className="MarqueeView_container__l4V1r">
                <span className="MarqueeView_content__2Qs2H">
                  {channel.channelName}
                </span>
              </div>
            </strong>
          </div>
        </Link>
      </li>
    </>
  );
};
export default ArtistCard;
