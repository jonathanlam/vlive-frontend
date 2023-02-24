import * as dayjs from "dayjs";

function FMTtimestamp(timestamp) {
  if (timestamp == null) return "Unknown Date";
  // i think after 2023 when vlive shuts down,
  // we can just assume all dates will be of the second format and not require the check
  const d = dayjs(timestamp);
  //var curr_year = dayjs().year();
  // this is intentionally == not === bc of type conversion
  // if (curr_year == d.format("YYYY")) return d.format("MMM D");
  // for dates in a different year
  return d.format("MMM D, YYYY");
}

function fmtMSS(s) {
  if (s == null) return "00:00";
  var seconds = parseInt(s, 10); // don't forget the second param
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  if (hours === 0) return minutes + ":" + seconds;
  return hours + ":" + minutes + ":" + seconds;
}

function formatNum(n) {
  if (n == null) return "0";
  if (n < 1000) return n;
  if (n < 1e6) return Math.round(n / 1000).toString() + "K";
  return Math.round(n / 1e5) / 10 + "M";
}

function get_thumbnail_ext(url) {
  if (url == null) return "";
  if (url.charAt(url.length - 4) === ".") return url.slice(-4);
  if (url.charAt(url.length - 5) === ".") return url.slice(-5);
}

export { formatNum, FMTtimestamp, fmtMSS, get_thumbnail_ext };
