import React from "react";
import LayoutTop from "../../components/layouttop.js";
import "../styles.css";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();

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
                <h2 className="lnb_pc_title--1lAio">
                  {t("about_description")}
                </h2>
              </div>
            </div>
            <div className="lnb--3RTnS -right_menu_text--23eET">
              <div
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  whiteSpace: "pre-line",
                }}
              >
                <h2>{t("about_motivation")}</h2>
                <p>{t("about_motivation_ans")}</p>
                <br></br>
                <h2>{t("about_what_groups")}</h2>
                <p>{t("about_what_groups_ans")}</p>
                <br></br>
                <h2>{t("about_add_more_groups")}</h2>
                <p>{t("about_add_more_groups_ans")}</p>
                <br></br>
                <h2>{t("about_can_i_contribute")}</h2>
                <p>{t("about_can_i_contribute_ans")}</p>
                <br></br>
                <h2>{t("about_team")}</h2>
                <p>{t("about_team_ans")}</p>
                <br></br>
                <h2>{t("about_taken_down")}</h2>
                <p>{t("about_taken_down_ans")}</p>
                <br></br>
                <h2>{t("about_thumb_subs")}</h2>
                <p>{t("about_thumb_subs_ans")}</p>
              </div>
            </div>
          </div>
          <div className="layout_right--2_POD">
            <a href="https://buymeacoffee.com/jonathanlam">
              <button type="button" className="channel_share_button--jm5Vl">
                {t("buymeacoffee")}
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
