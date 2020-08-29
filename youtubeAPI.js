(function () {
  // FETCH YOUTUBE API
  async function youtubeApi() {
    try {
      response = await fetch("https://hamzachikhi.me/youtube.php", {
        credentials: "include",
      });
      data = await response.json();
      document.querySelector("#display").src =
        "https://www.youtube.com/embed/" + data.items[0].contentDetails.videoId;
    } catch (e) {
      console.log(e);
    }
  }

  /*
      <iframe
      id="display"
      width="100%"
      src=""
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      ></iframe>
      */

  // youtubeApi();
})();
