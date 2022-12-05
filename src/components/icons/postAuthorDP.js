import React from "react";

const PostAuthorDP = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30">
      <mask id="thumbnail-mask-30">
        <path d="M15 0c8.284 0 15 6.716 15 15 0 .677-.045 1.343-.132 1.996C28.722 16.36 27.403 16 26 16c-4.418 0-8 3.582-8 8 0 1.976.716 3.784 1.903 5.18-1.536.531-3.186.82-4.903.82-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0z"></path>
      </mask>
      <image
        mask="url(#thumbnail-mask-30)"
        href="https://v-phinf.pstatic.net//20221108_162/1667833246253TDu1r_JPEG/image.jpg?type=round60_60"
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      ></image>
    </svg>
  );
};

export default PostAuthorDP;
