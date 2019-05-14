$(function() {

$(".eat-me").on("click", function(event) {
  console.log("eat-me pressed");
  event.preventDefault();

  var id = $(this).data("id");
  console.log(id);

  var newStatus = {
    devoured: true
  };
  console.log(newStatus);
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newStatus
  }).then(
    function() {
      console.log("burger status changed to " + newStatus);
      location.reload();
    }
  );
});

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("button pressed");
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added a burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});