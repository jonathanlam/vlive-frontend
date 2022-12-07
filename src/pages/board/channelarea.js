import React from "react";

const ChannelArea = ({ artist }) => {
  return (
    <>
      <a href={"/channel/" + artist.channel} class="channel_link--3kVMW">
        <span class="thumbnail_wrapper--1FNPC">
          <img src={artist.image} alt="" width="76" height="76" />
        </span>
        <strong class="channel_name--1VIVt" title="ITZY">
          {artist.name}
        </strong>
      </a>
      <span class="member--36HZL">
        Members <span class="number">{artist.members}</span>
      </span>
      <button class="register_button--1QhmP">Join</button>
      <ul class="menu_list--1Xv9-">
        <li class="menu_item--2Pf5K -home--1oM8u">
          <a href={"/channel/" + artist.channel} class="menu_link--2EiO4">
            <span>HOME</span>
          </a>
        </li>
        <li class="menu_item--2Pf5K -store--1y_xL">
          <a class="menu_link--2EiO4" href={"/channel/" + artist.channel}>
            <span>STORE</span>
          </a>
        </li>
        <li class="menu_item--2Pf5K -chat--WSxZX">
          <a class="menu_link--2EiO4" href={"/channel/" + artist.channel}>
            <span>CHAT</span>
            <span class="red_dot--5VNZE">
              <em
                class="red_dot--2g2N8"
                style={{ width: "5px", height: "5px" }}
              >
                <span class="blind">new</span>
              </em>
            </span>
          </a>
        </li>
        <li class="menu_item--2Pf5K -schedule--1ZHsc">
          <a class="menu_link--2EiO4" href="#">
            <span>SCHEDULE</span>
          </a>
        </li>
        <li class="menu_item--2Pf5K -my--eR6XS">
          <a class="menu_link--2EiO4" href="#">
            <span>MY</span>
          </a>
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
