$(() => {
  const $chirps = $("#chirps");
  const $user = $("#user");
  const $chirpText = $("#chirp-text");

  displayChirps = chirps => {
    $chirps.empty();
    removeChirp = id => {
      $.ajax({
        type: "DELETE",
        url: "api/chirps/" + id,
        success: chirps => {
          displayChirps(chirps);
        },
        error: err => {
          console.log(err);
        }
      });
    }; //Delete chirp by id and update chirps display
    $.each(chirps, (i, chirp) => {
      if (chirp.user && chirp.text !== undefined) {
        $chirps.append(
          '<div class="card w-25 text-center m-2 rounded"><div class="card-body"><h4 class="card-title">' +
            chirp.user +
            '</h4><p class="card-text">' +
            chirp.text +
            "</p>" +
            `<button class="btn btn-danger" onclick="removeChirp(${i})">X</button>` +
            "</div></div>"
        );
      }
    });
  }; //update chirps display

  $.ajax({
    type: "GET",
    url: "api/chirps",
    success: chirps => {
      displayChirps(chirps);
    },
    error: err => {
      console.log(err);
    }
  }); //if user and text is not undefined show each chirp in card; if any errors arise log them in console

  $("#chirp-submit").on("click", () => {
    let chirp = {
      user: $user.val(),
      text: $chirpText.val()
    }; //create chirp object with the input values from user and chirpText
    $.ajax({
      type: "POST",
      url: "api/chirps",
      data: chirp,
      success: chirps => {
        displayChirps(chirps);
      },
      error: err => {
        console.log(err);
      }
    }); //update chirps.json with new chirp; if any errors arise log them in console
  });
});
