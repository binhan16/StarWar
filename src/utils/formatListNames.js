const formatListNames = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1).replaceAll("_", " ");
// change "episode_id" => "Episode id"
export default formatListNames;
