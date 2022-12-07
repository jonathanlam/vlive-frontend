import React from "react";

const ChannelArea = ({ author }) => {
  return (
    <>
      <a href="/channel/BAE889" class="channel_link--3kVMW">
        <span class="thumbnail_wrapper--1FNPC">
          <img
            src="https://v-phinf.pstatic.net/20221108_114/1667833238621nOPdG_PNG/profile1093_34343.png?type=f152_152"
            alt=""
            width="76"
            height="76"
          />
        </span>
        <strong class="channel_name--1VIVt" title="ITZY">
          {author.nickname}
        </strong>
      </a>
      <span class="member--36HZL">
        Members <span class="number">3,729,832</span>
      </span>
      <button class="register_button--1QhmP">Join</button>
      <ul class="menu_list--1Xv9-">
        <li class="menu_item--2Pf5K -home--1oM8u">
          <a href="/channel/BAE889" class="menu_link--2EiO4">
            <span>HOME</span>
          </a>
        </li>
        <li class="menu_item--2Pf5K -store--1y_xL">
          <a class="menu_link--2EiO4" href="/channel/BAE889/store">
            <span>STORE</span>
          </a>
        </li>
        <li class="menu_item--2Pf5K -chat--WSxZX">
          <a class="menu_link--2EiO4" href="/channel/BAE889/chat">
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
          <a class="menu_link--2EiO4" href="/channel/BAE889/schedule">
            <span>SCHEDULE</span>
          </a>
        </li>
        <li class="menu_item--2Pf5K -my--eR6XS">
          <a class="menu_link--2EiO4" href="/channel/BAE889/member">
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
