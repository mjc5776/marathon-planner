$(document).ready(function(){
  $("body").live("click", ".suggest-movie", function() {
    var movieId = parseInt($(this).attr("data-movieID"));
    $.ajax("/api/similar/"+movieId, {
        type: "GET"
    }).then(function(data) {
        console.log(data);
    });
  });
})



