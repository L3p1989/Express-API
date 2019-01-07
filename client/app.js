$(() => {
  let $chirps = $(".chirps");

  $.ajax({
    type: "GET",
    url: "api/chirps",
    success: chirps => {
      $.each(chirps, (i, chirp) => {
        $chirps.append(
          '<div class="card w-25 text-center m-2 rounded"><div class="card-body"><h4 class="card-title">' +
            chirp.user +
            '</h4><p class="card-text">' +
            chirp.text +
            "</p></div></div>"
        );
      });
    }
  });
});
