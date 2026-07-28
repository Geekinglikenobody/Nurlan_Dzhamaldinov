const video = document.querySelector(".screen__video");

if (video) {
  video.muted = true;

  const play = () => {
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        video.style.display = "none";
      });
    }
  };

  video.addEventListener("error", () => {
    video.style.display = "none";
  });

  video.addEventListener("loadeddata", play);
  play();

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) play();
  });
}
