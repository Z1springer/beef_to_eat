console.log("this page is working?");

$(function () {
  $(".create-form").on("submit", function (event) {
    console.log("something===================================================");
    event.preventDefault();

    const newBeef = {
      name: $("#notHungry").val().trim(),
      consumed: $("[name=Consume]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBeef,
    }).then(function () {
      console.log("Created New Beef Thing");
      // location.reload();
    });
  });
  console.log($(".eat-burger"));
  $(".eat-it").on("click", function (event) {
    console.log("something===================================================");
    let id = $(this).data("id");
    const eatBeef = $(this).data("eatBeef");

    const consumedBeef = {
      consumed: eatBeef,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: consumedBeef,
    }).then(function () {
      console.log("Eat Beef");
      // location.reload();
    });
  });

  $(".delete-beef").on("click", function (event) {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("Beef has been removed", id);
      // location.reload();
    });
  });
});
