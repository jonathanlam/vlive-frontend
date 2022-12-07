import React from "react";
import { Link } from "react-router-dom";

const ChannelArea = ({ artist }) => {
  return (
    <>
      <Link to={"/channel/" + artist.channel} class="channel_link--3kVMW">
        <span class="thumbnail_wrapper--1FNPC">
          <img src={artist.image} alt="" width="76" height="76" />
        </span>
        <strong class="channel_name--1VIVt" title="ITZY">
          {artist.name}
        </strong>
      </Link>
      <span class="member--36HZL">
        Members <span class="number">{artist.members}</span>
      </span>
      <button class="register_button--1QhmP">Join</button>
      <ul class="menu_list--1Xv9-">
        <li class="menu_item--2Pf5K -home--1oM8u">
          <Link href={"/channel/" + artist.channel} class="menu_link--2EiO4">
            <span>HOME</span>
          </Link>
        </li>
        <li class="menu_item--2Pf5K -store--1y_xL">
          <Link class="menu_link--2EiO4">
            <span>STORE</span>
          </Link>
        </li>
        <li class="menu_item--2Pf5K -chat--WSxZX">
          <Link class="menu_link--2EiO4">
            <span>CHAT</span>
            <span class="red_dot--5VNZE">
              <em
                class="red_dot--2g2N8"
                style={{ width: "5px", height: "5px" }}
              >
                <span class="blind">new</span>
              </em>
            </span>
          </Link>
        </li>
        <li class="menu_item--2Pf5K -schedule--1ZHsc">
          <Link class="menu_link--2EiO4">
            <span>SCHEDULE</span>
          </Link>
        </li>
        <li class="menu_item--2Pf5K -my--eR6XS">
          <Link class="menu_link--2EiO4">
            <span>MY</span>
          </Link>
        </li>
      </ul>
      <div class="button_group--1qPM8">
        <button type="button" class="snb_button--8mSB3 -post--1ZwgT">
          Post
        </button>
      </div>
    </>
  );
};
export default ChannelArea;
