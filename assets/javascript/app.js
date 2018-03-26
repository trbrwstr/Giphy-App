$(document).ready(function() {
    $("button").on("click", function() {
        var movie = $(this).data("name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax ({
            url: queryURL,
            method: "GET"
        })
            .done(function(response) {

                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var movie = $("<div>");
                    var p = $("<p>");

                    p.text(results[i].rating);

                    var movieGif = $("<img>")

                    movieGif.addClass("anImg");
                    movieGif.attr("src", results[i].images.fixed_height.url);
                    movieGif.attr("data-still", results[i].images.fixed_height_still.url) 
                    movieGif.attr("data-animate", results[i].images.fixed_height.url)

                    .attr("data-state", "still");

                    movieDiv.append(p);
                    movieDiv.append(movieGif);
                    movieDiv.prependTo($("#gifs"));
                }

                $(".anImg").on("click", function() {
                    var state = $(this).attr("data-state");
                    console.log(this);

                    if (state == "still") {

                        $(this).attr("src", $(this).data("animate"));
                        $(this).attr("data-state", "animate");
                    }
                });
            });
    });
});