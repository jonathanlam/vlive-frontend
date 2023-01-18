import React from "react";
import { Link } from "react-router-dom";

const BoardList = ({ artist, active_board }) => {
  return (
    <li className="board_group_item--uTaOQ">
      <strong className="group_name--2Ufyg">Official</strong>
      <ul className="board_list--iksmp">
        <li
          className={`board_item--8Emtz ${
            active_board === 0 && "is_active--3yXYJ"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="board_icon--3B72f"
          >
            <path
              fill="#B5B5BD"
              d="M12 0c3.314 0 6 2.686 6 6v6c0 3.314-2.686 6-6 6H6c-3.314 0-6-2.686-6-6V6c0-3.314 2.686-6 6-6h6zm-.66 10.303l-1.887 1.373.648.436 1.165.78c.11.075.248.096.376.06.24-.068.38-.319.31-.559l-.376-1.325-.236-.765zm-2.19-5.73c-.235-.082-.493.042-.576.277l-.872 2.48H4.897c-.138 0-.269.063-.354.171-.156.196-.123.48.073.636l2.156 1.711-.706 2.482c-.037.132-.012.275.068.387.146.203.429.25.632.104l6.496-4.671c.118-.085.188-.222.188-.367 0-.25-.202-.453-.452-.453h-2.699l-.871-2.48c-.046-.129-.148-.23-.277-.276z"
            ></path>
          </svg>
          <Link className="board_link--10CG-" to={"/channel/" + artist.channel}>
            {artist.name} Board
          </Link>
        </li>
      </ul>
    </li>
  );
};

const VlivePlusBoardItem = ({ artist, board, active_board }) => {
  // needs double not triple equals here because different types.
  // highlights the currently active board.
  return (
    <li
      className={`board_item--8Emtz ${
        active_board == board.id && "is_active--3yXYJ"
      }`}
    >
      <div class="badge_vliveplus--13ZOr">
        <em class="badge--3Jtfu vliveplus--25hf- -size14--pHo0H">
          <span class="blind">VLIVE PLUS</span>
        </em>
      </div>
      <Link
        className="board_link--10CG- -vlive_plus--3X-PI"
        to={`/channel/${artist.channel}/${board.id}`}
      >
        VLIVE+ Board
      </Link>
    </li>
  );
};

const StdBoardItem = ({ artist, board, active_board }) => {
  console.log(active_board);
  console.log(board.id);
  return (
    <li
      className={`board_item--8Emtz ${
        active_board == board.id && "is_active--3yXYJ"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="board_icon--3B72f"
      >
        <path
          fill="#B5B5BD"
          d="M12 0c3.314 0 6 2.686 6 6v6c0 3.314-2.686 6-6 6H6c-3.314 0-6-2.686-6-6V6c0-3.314 2.686-6 6-6h6zm-.66 10.303l-1.887 1.373.648.436 1.165.78c.11.075.248.096.376.06.24-.068.38-.319.31-.559l-.376-1.325-.236-.765zm-2.19-5.73c-.235-.082-.493.042-.576.277l-.872 2.48H4.897c-.138 0-.269.063-.354.171-.156.196-.123.48.073.636l2.156 1.711-.706 2.482c-.037.132-.012.275.068.387.146.203.429.25.632.104l6.496-4.671c.118-.085.188-.222.188-.367 0-.25-.202-.453-.452-.453h-2.699l-.871-2.48c-.046-.129-.148-.23-.277-.276z"
        ></path>
      </svg>
      <Link
        className="board_link--10CG-"
        to={`/channel/${artist.channel}/${board.id}`}
      >
        {board.name}
      </Link>
    </li>
  );
};

const BoardListSpecial = ({ artist, active_board }) => {
  const boards = artist.boards;
  //const boards = [
  //  { name: "VLIVE+", id: 4 },
  //  { name: "Time To Twice", id: 5 },
  //];

  // Do not show special boards if none
  if (boards.length === 0) return <></>;

  // Special boards can either be VLIVE+ or a standard
  // board item.
  return (
    <li className="board_group_item--uTaOQ">
      <strong className="group_name--2Ufyg">Special</strong>
      <ul className="board_list--iksmp">
        {boards.map((board, key) =>
          board.name === "VLIVE+" ? (
            <VlivePlusBoardItem
              artist={artist}
              board={board}
              active_board={active_board}
            />
          ) : (
            <StdBoardItem
              artist={artist}
              board={board}
              active_board={active_board}
            />
          )
        )}
      </ul>
    </li>
  );
};

export { BoardList, BoardListSpecial };
