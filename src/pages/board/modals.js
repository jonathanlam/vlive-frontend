import React from "react";

const SettingsModal = ({
  year,
  setYear,
  sortBy,
  setSortBy,
  setSettingsOpen,
  searchText,
  setSearchText,
  run,
}) => {
  const handleClose = () => {
    setSettingsOpen(false);
  };

  const yearOptions = [
    "All Years",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017 and earlier",
  ];

  const sortOptions = ["Newest", "Oldest", "Most popular"];

  return (
    <div class="modal--1N199">
      <div class="modal_wrap--1CX43 is_fixed--4RKjs">
        <div class="modal_main--Zh78R">
          <div class="modal_header--3NePP">
            <div class="header_inner--2mKxp">
              <h3 class="header_title--3U_rm">Options</h3>
            </div>
          </div>
          <div class="modal_content--1N9Ky">
            <div class="content_inner--KDiaa">
              <div class="option_list--BvEwT -modal--Zu36t">
                <strong class="option_group--2XSCk">Sort by</strong>
                <ul>
                  {sortOptions.map((sortmenu, key) => (
                    <li class="option_item--1XsJy">
                      <button
                        type="button"
                        class={`option_button--xMcVN ${
                          sortBy === sortmenu && "is_select--1857x"
                        }`}
                        onClick={() => setSortBy(sortmenu)}
                      >
                        <span class="option_button_inner--2I_uR">
                          <span class="option_title--X6IJe">{sortmenu}</span>
                        </span>
                        {sortBy === sortmenu && (
                          <span class="option_check--T2a2O">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="none"
                                stroke="#8D54E6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M4.5 10.553L9.699 15.45 20.25 5.5"
                              ></path>
                            </svg>
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                <strong class="option_group--2XSCk">By year</strong>
                <ul>
                  {yearOptions.map((yearmenu, key) => (
                    <li class="option_item--1XsJy">
                      <button
                        type="button"
                        class={`option_button--xMcVN ${
                          year === yearmenu && "is_select--1857x"
                        }`}
                        onClick={() => setYear(yearmenu)}
                      >
                        <span class="option_button_inner--2I_uR">
                          <span class="option_title--X6IJe">{yearmenu}</span>
                        </span>
                        {year === yearmenu && (
                          <span class="option_check--T2a2O">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="none"
                                stroke="#8D54E6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M4.5 10.553L9.699 15.45 20.25 5.5"
                              ></path>
                            </svg>
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                <strong class="option_group--2XSCk">Search By Name</strong>
                <input
                  class="option_group--2XSCk"
                  type="text"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div class="modal_footer--1fc6a">
            <button
              type="button"
              class="footer_button--1SsnD -cancel--24aAy"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="button"
              class="footer_button--1SsnD -ok--1d_jI"
              onClick={() => {
                run();
                handleClose();
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareModal = ({ group, closeFn }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  //
  function handleClipboardCopy() {
    navigator.clipboard.writeText(
      `https://www.vlivearchive.com/channel/${group}`
    );
    // clipboard does not save when using an alert
    //alert("Link has been copied to clipboard");
  }

  return (
    <div class="modal--1N199" style={{ display: "flex" }}>
      <div class="modal_wrap--1CX43">
        <div class="modal_main--Zh78R">
          <div class="modal_header--3NePP">
            <div class="header_inner--2mKxp">
              <h3 class="header_title--3U_rm">Share</h3>
            </div>
          </div>
          <div class="modal_content--1N9Ky">
            <div class="content_inner--KDiaa">
              <ul class="share_button_list--1EC9R">
                <li class="share_button_item--1PMKT">
                  <button
                    type="button"
                    class="share_button--1MvYV -facebook"
                    onClick={() =>
                      openInNewTab(
                        `https://www.facebook.com/sharer/sharer.php?u=https%3A//www.vlivearchive.com/channel/${group}`
                      )
                    }
                  >
                    <span class="share_icon--3W0Mr">
                      <span class="icon_share--3jEj- -facebook--9WQdh">
                        <svg width="11" height="19" viewBox="0 0 11 19">
                          <g fill="none">
                            <path d="M-9-4h28v28H-9z"></path>
                            <path
                              fill="#2B2B2E"
                              d="M2.94 18.104l.023-7.981H1.316c-.204 0-.369-.165-.369-.368V7.273c0-.203.165-.368.369-.368h1.647v-1.93c0-2.624.974-4.186 4.208-4.186h2.618c.204 0 .369.165.369.369v2.456c0 .204-.165.368-.369.368H8.346c-1.26 0-1.343.475-1.343 1.314l-.005 1.609h2.637c.204 0 .369.165.369.368 0 .014-.001.028-.003.041l-.275 2.481c-.02.187-.178.328-.366.328H6.998v7.982c0 .204-.165.369-.369.369h-3.32c-.204 0-.37-.165-.37-.369z"
                            ></path>
                          </g>
                        </svg>
                        <span class="blind">facebook</span>
                      </span>
                    </span>
                    <span class="share_title--xhVWa">Facebook</span>
                  </button>
                </li>
                <li class="share_button_item--1PMKT">
                  <button
                    type="button"
                    class="share_button--1MvYV -twitter"
                    onClick={() =>
                      openInNewTab(
                        `https://twitter.com/intent/tweet?text=https%3A//www.vlivearchive.com/channel/${group}`
                      )
                    }
                  >
                    <span class="share_icon--3W0Mr">
                      <span class="icon_share--3jEj- -twitter--2WR-K">
                        <svg width="18" height="14" viewBox="0 0 18 14">
                          <g fill="none">
                            <path
                              fill="#2B2B2E"
                              d="M15.214 2.214c.652-.397 1.166-1.004 1.45-1.729.028-.074 0 0 0 0 .043-.125-.057-.146-.115-.113 0 0 .065-.037 0 0-.62.346-1.297.6-2.015.743C13.9.43 12.997 0 11.996 0 10.077 0 8.52 1.583 8.52 3.534c0 .277.03.546.09.805C5.842 4.198 3.376 2.902 1.665.912c-.076-.088 0 0 0 0-.123-.147-.294-.129-.39.066l-.017.04c-.184.43-.286.907-.286 1.406 0 1.225.614 2.307 1.547 2.941-.45-.013-.88-.117-1.274-.29-.103-.045 0 0 0 0-.166-.083-.298.012-.293.139 0 0-.006-.081 0 0 .108 1.602 1.267 2.911 2.782 3.22-.292.082-.599.124-.916.124-.224 0-.292-.019-.292-.019-.2-.024-.31.107-.24.286 0 0-.047-.108 0 0 .527 1.23 1.725 2.098 3.125 2.123-1.19.949-2.69 1.514-4.318 1.514-.43 0-.12.436-.12.436C2.393 13.701 3.85 14 5.592 14c6.396 0 9.893-5.385 9.893-10.055 0-.154-.003-.308-.01-.458.601-.441 1.132-.978 1.568-1.587.057-.08 0 0 0 0 .092-.134.013-.176-.052-.149 0 0 .073-.03 0 0-.56.23-1.156.387-1.778.463z"
                            ></path>
                            <path d="M-6-7h28v28H-6z"></path>
                          </g>
                        </svg>
                        <span class="blind">twitter</span>
                      </span>
                    </span>
                    <span class="share_title--xhVWa">Twitter</span>
                  </button>
                </li>
                <li class="share_button_item--1PMKT">
                  <button type="button" class="share_button--1MvYV -tumblr">
                    <span class="share_icon--3W0Mr">
                      <span class="icon_share--3jEj- -tumblr--2uQkT">
                        <svg width="11" height="18" viewBox="0 0 11 18">
                          <defs>
                            <path
                              id="70t5x6wxsa"
                              d="M0 0h10.609v18.738H0z"
                            ></path>
                          </defs>
                          <g fill="none">
                            <path d="M-8-5h28v28H-8z"></path>
                            <g transform="translate(.5 -.5)">
                              <mask id="h0on0ajq5b" fill="#fff"></mask>
                              <path
                                fill="#2B2B2E"
                                d="M7.35 18.5c-2.656 0-4.636-1.393-4.636-4.725V8.44H.3V5.55C2.956 4.847 4.067 2.517 4.196.5h2.758v4.581h3.218V8.44H6.954v4.647c0 1.392.69 1.874 1.788 1.874H10.3v3.54H7.35z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span class="blind">tumblr</span>
                      </span>
                    </span>
                    <span class="share_title--xhVWa">Tumblr</span>
                  </button>
                </li>
                <li class="share_button_item--1PMKT">
                  <button
                    type="button"
                    class="share_button--1MvYV -link"
                    onClick={handleClipboardCopy}
                  >
                    <span class="share_icon--3W0Mr">
                      <span class="icon_share--3jEj- -link--1GzJ_">
                        <svg width="19px" height="19px" viewBox="0 0 19 19">
                          <g transform="translate(-5 -4)" fill="none">
                            <path d="M0 0h28v28H0z"></path>
                            <path
                              fill="#2B2B2E"
                              d="M15.05222963 6.4705631c1.96548299-1.96548298 5.08924423-2.05558429 6.97822236-.16660615 1.83926818 1.83926817 1.80224845 4.849186-.01533453 6.82068985l-.15127163.1575325-2.21495981 2.21495981c-.3319457.3319457-.8701359.33194563-1.20208153 0-.30641136-.30641136-.32998149-.78855777-.07071032-1.12200529l.07071032-.08007623 2.2149598-2.21495981c1.31660554-1.31660553 1.37568848-3.364977.16660618-4.5740593-1.16738981-1.16738981-3.11718472-1.15256617-4.4353128.03489183l-.1387465.13171433-2.22966403 2.22966402c-.33194562.33194563-.8701359.33194563-1.20208153 0-.30641137-.30641137-.32998148-.78855776-.07071032-1.12200529l.07071032-.08007624 2.22966402-2.22966402zm-5.3549416 5.35448038c.33194569-.3319457.87013588-.33194564 1.20208152 0 .3064114.3064114.32998146.78855774.0707103 1.12200525l-.07071026.08007631-2.72695525 2.72695525c-1.31660551 1.31660551-1.37568844 3.36497695-.1666062 4.5740592 1.16738981 1.1673898 3.11718472 1.15256615 4.43531276-.03489181l.1387465-.13171432 2.730476-2.730476c.33194563-.33194563.87013592-.33194563 1.20208154 0 .30641143.30641142.32998149.78855777.07071032 1.12200528l-.07071032.08007624-2.730476 2.730476c-1.96548298 1.96548298-5.08924412 2.05558434-6.97822232.16660613-1.83926818-1.83926818-1.80224843-4.84918593.01533456-6.82068978l.1512716-.1575325 2.72695525-2.72695525z"
                            ></path>
                            <rect
                              fill="#2B2B2E"
                              transform="rotate(-45 14.29699 13.895845)"
                              x="10.0658406"
                              y="13.0458445"
                              width="8.46229986"
                              height="1.7"
                              rx="0.85"
                            ></rect>
                          </g>
                        </svg>
                        <span class="blind">link</span>
                      </span>
                    </span>
                    <span class="share_title--xhVWa">Copy Link</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal_footer--1fc6a">
            <button
              type="button"
              class="footer_button--1SsnD -cancel--24aAy"
              onClick={closeFn}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SettingsModal, ShareModal };
