$("#search").click(function () {
    alert("搜索")
}
);

$("#toggle").click(function () {
    $("#search").toggleClass("hide");
    $("#toggle").toggleClass("active");
    $("#menu").toggleClass("open");
}
);