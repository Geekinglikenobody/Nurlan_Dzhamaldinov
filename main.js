const video = document.querySelector(".screen__video");

if (video) {
  video.muted = true;

  const play = () => {
    video.play().catch(() => {});
  };

  play();

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) play();
  });

  video.addEventListener("loadeddata", play);
}
