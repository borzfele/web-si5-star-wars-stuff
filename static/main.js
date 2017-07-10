var app = app || {};

app.init = function() {
    app.dataHandler.getPlanetsData(app.dataHandler.defUrl);

    $(".resident").on("click", function() {
        $("#myModal").css("display", "block");
    });
    $(".close").on("click", function() {
        $("#myModal").css("display", "none");
    });
    $("#myModal").on("click", function() {
        $("#myModal").css("display", "none");
    });
};
    
app.init();