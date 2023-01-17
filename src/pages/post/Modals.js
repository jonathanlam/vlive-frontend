import React from "react";

const SubtitlesModal = ({ subs, setSubsOpen, artist }) => {
  function handleClose() {
    setSubsOpen(false);
  }

  function handleDownload(e, srt) {
    // set srt = 0 for vtt files, or srt=1 for srt files
    var url = `https://vlivearchive.com/subtitles/${e.file_name}?bucket=${artist.bucket}&channel=${artist.channel}`;
    if (srt === 1) url = url.replaceAll("vtt", "srt");
    window.open(url);
  }

  return (
    <div class="modal--1N199">
      <div class="modal_wrap--1CX43 is_fixed--4RKjs">
        <div class="modal_main--Zh78R">
          <div class="modal_header--3NePP">
            <div class="header_inner--2mKxp">
              <h3 class="header_title--3U_rm">Download Subtitles</h3>
            </div>
          </div>
          <div class="modal_content--1N9Ky">
            <div class="content_inner--KDiaa">
              <div class="option_list--BvEwT -modal--Zu36t">
                <strong class="option_group--2XSCk">VTT format</strong>
                <ul>
                  {subs.map((sub, key) => (
                    <li class="option_item--1XsJy">
                      <button
                        type="button"
                        class="option_button--xMcVN"
                        onClick={() => handleDownload(sub, 0)}
                      >
                        <span class="option_button_inner--2I_uR">
                          <span class="option_title--X6IJe">{sub.name}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <strong class="option_group--2XSCk">SRT format</strong>
                <ul>
                  {subs.map((sub, key) => (
                    <li class="option_item--1XsJy">
                      <button
                        type="button"
                        class="option_button--xMcVN"
                        onClick={() => handleDownload(sub, 1)}
                      >
                        <span class="option_button_inner--2I_uR">
                          <span class="option_title--X6IJe">{sub.name}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="modal_footer--1fc6a">
            <button
              type="button"
              class="footer_button--1SsnD -cancel--24aAy"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MoreOptions = ({
  handler,
  handleDownload,
  handleSubs,
  thumbnail_url,
}) => {
  function downloadThumbnail() {
    window.open(thumbnail_url);
  }

  return (
    <div class="option_list_wrap--3MIAt -button_layer--1FBE8 -right15--2e4o3">
      <div class="option_list_inner--2clnH">
        <ul class="option_list--3LKju">
          <li class="option_item--116DI -copy--dVBrE">
            <button type="button" class="option_content--Emqey -button--1xdgv">
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Copy URL</span>
                </span>
              </span>
            </button>
          </li>
          <li class="option_item--116DI -share--2Esfu">
            <button type="button" class="option_content--Emqey -button--1xdgv">
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Share</span>
                </span>
              </span>
            </button>
          </li>
          <li class="option_item--116DI -bookmark--3j7B6">
            <button type="button" class="option_content--Emqey -button--1xdgv">
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Bookmark</span>
                </span>
              </span>
            </button>
          </li>
          <li class="option_item--116DI -bookmark--3j7B6">
            <button
              type="button"
              class="option_content--Emqey -button--1xdgv"
              onClick={() => {
                handleDownload();
                handler();
              }}
            >
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Download Video</span>
                </span>
              </span>
            </button>
          </li>
          <li class="option_item--116DI -subtitles--vBl9U">
            <button
              type="button"
              class="option_content--Emqey -button--1xdgv"
              onClick={() => {
                handleSubs();
                handler();
              }}
            >
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Download Subtitles</span>
                </span>
              </span>
            </button>
          </li>
          <li class="option_item--116DI -subtitles--vBl9U">
            <button
              type="button"
              class="option_content--Emqey -button--1xdgv"
              onClick={() => {
                downloadThumbnail();
                handler();
              }}
            >
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                {/* FIX ICON BEFORE COMMITTING */}
                <span class="text">
                  <span class="main_text--2S-lP">Download Thumbnail</span>
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SubtitlesModal, MoreOptions };
