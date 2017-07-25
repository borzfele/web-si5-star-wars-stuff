var app = app || {};

app.init = function() {
    app.dataHandler.getPlanetsData(app.dataHandler.defUrl);

    $(".resident").on("click", function() {
        $("#myModal").css("display", "block");
    });

    $(".close").on("click", function() {
        $("#myModal").css("display", "none");
    });

    $("#registration").on("click", function() {
        $("#username").val('');
        $("#password").val('');
        $("#registration_box").css("display", "block");
        $('#registration_form').on('keyup keypress', function(e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) { 
                e.preventDefault();
                return false;
            }
        });
        $("#save").on("click", function() {
            var username = $("#username").val();
            var password = $("#password").val();
            var data = {"username" : username, "password" : password};
            app.dataHandler.userRegistration(data);
            $("#registration_box").css("display", "none");
        });
        $("#cancel").on("click", function() {
            $("#registration_box").css("display", "none");
        });
    });

    $(".close").on("click", function() {
        $("#registration_box").css("display", "none");
    });
};
    
app.init();