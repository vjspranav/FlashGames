window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();
  const container = document.getElementById("container");
  container.appendChild(player);
  player.load("../games/Super Mario 63.swf");
});
