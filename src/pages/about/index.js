import React from "react";
import LayoutTop from "../../components/layouttop.js";
import "../styles.css";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="layout--2CJge">
        <LayoutTop />
        <div className="layout_main--2iozc">
          <div className="snb--dI3H2">
            <nav className="nav--Lwe6x"></nav>
          </div>
          <div className="snb_dimmed--IZGKU"></div>
          <div className="layout_content--3-hGQ">
            <div className="lnb--3RTnS -right_menu_text--23eET">
              <div className="lnb_inner--1EWFM">
                <h2 className="lnb_pc_title--1lAio">About this project</h2>
              </div>
            </div>
            <div className="lnb--3RTnS -right_menu_text--23eET">
              <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                <h2>Motivation</h2>
                <p>
                  As we all know, V LIVE is going to be shut down at the end of
                  2022. I wanted to preserve as many videos and features of V
                  LIVE as possible whilst preserving the V LIVE experience.
                </p>
                <p>
                  <br></br>
                </p>
                <h2>What groups and what content is available?</h2>
                <p>
                  At first the project was to archive my favourite artists. I
                  also prioritised artists who aren't on Weverse, artists
                  without existing archives on Google Drive or similar
                  platforms, and nugu groups.
                </p>
                <p>
                  <br></br>
                </p>
                <p>
                  At the moment, only "lives" are uploaded, so pre-recorded
                  content is not uploaded because they are usually also
                  available on other platforms such as YouTube.
                </p>
                <br></br>
                <h2>Can you add more groups?</h2>
                <p>
                  My email is contact@vlivearchive.com.
                </p>
                <br></br>
                <h2>Can I contribute?</h2>
                <p>
                  If you have videos or subtitles not on the platform, please
                  contact me and I'll arrange for those videos to be added to
                  the database.
                </p>
                <br></br>
                <p>
                  You can also contribute by donating on Buy Me A Coffee (for
                  non-Australian residents at https://buymeacoffee.com/jonathanlam ) or donating on BeemIt (@jonathanlam)
                  for Australians. My BeemIt profile picture is a snake. This
                  will help with the costs of running this website. As you can
                  imagine, running a global site of this scale with this many
                  videos is expensive. It costs about $50 USD per day to run.
                </p>
                <br></br>
                <p>
                  For software developers, the front end is open source on
                  GitHub at{" "}
                  <a href="https://github.com/jonathanlam/vlive-frontend">
                    https://github.com/jonathanlam/vlive-frontend
                  </a>
                  .
                </p>
                <br></br>
                <h2>Will this site be taken down?</h2>
                <br></br>
                <p>
                  This site is run independently of V LIVE servers and will not
                  be affected by the shut down. The site is also independent of
                  parties like Google Drive or YouTube so those companies also
                  cannot shut down my site.
                </p>
                <br></br>
              </div>
            </div>
          </div>
          <div className="layout_right--2_POD">
            <a href="https://buymeacoffee.com/jonathanlam">
              <button type="button" className="channel_share_button--jm5Vl">
                Buy Me A Coffee
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
