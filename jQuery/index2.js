$(document).ready(function () {
  $("h1").mouseenter(function () {
    console.log("Hello world ");
  });
  $("h1").hover(function () {
    console.log("Hello world ");
  });
  $("h1").dblclick(function () {
    console.log("DOuble clicked ");
  });
  $("p").on({
    click: function () {
      $(this).css("background-color", "red");
    },
    mouseenter: function () {
      $(this).css("background-color", "green");
    },
    mouseleave: function () {
      $(this).css("background-color", "blue");
    },
    dblclick: function () {
      $(this).css("background-color", "yellow");
    },
  });
  $("#para").hide(1000, function () {});
  $("#para").show(1000, function () {});
  $("#btn").click(function () {
    $("p").toggle(1000, function () {});
  });
  $.get("https://jsonplaceholder.typicode.com/todos", function (data, status) {
    alert(status);
    $("para").text(data);
    console.log(data);
  });
});
