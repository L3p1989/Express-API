$(() => {
  let $chirps = $(".chirps");

  $.ajax({
    type: "GET",
    url: "api/chirps",
    success: chirps => {
      $.each(chirps, (i, chirp) => {
        if (chirp.user && chirp.text !== undefined) {
          $chirps.append(
            '<div class="card w-25 text-center m-2 rounded"><div class="card-body"><h4 class="card-title">' +
              chirp.user +
              '</h4><p class="card-text">' +
              chirp.text +
              "</p></div></div>"
          );
        }
      });
    },
    error: err => {
      console.log(err);
    }
  });
}); //if user and text is not undefined show each chirp in card; if any errors arise log them in console
