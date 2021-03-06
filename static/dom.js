var app = app || {};

app.dom = {
    generateTable: function(datasToDisplay) {
        $("#next").off("click");
        $("#previous").off("click");
        $("#planets_table").css('display', 'none');
        $("#planets_data").html('');
        for (i = 0; i < datasToDisplay['results'].length; i++) {
            var defaultRow = document.getElementById('planet_data_x');
            var clonedRow = defaultRow;
            clonedRow = clonedRow.outerHTML.replace(/x/g, i);
            $("#planets_data").append(clonedRow);
            $("#name_" + i).html(datasToDisplay['results'][i]['name']);
            $("#diameter_" + i).html(datasToDisplay['results'][i]['diameter']);
            $("#climate_" + i).html(datasToDisplay['results'][i]['climate']);
            $("#terrain_" + i).html(datasToDisplay['results'][i]['terrain']);
            $("#surface_" + i).html(datasToDisplay['results'][i]['surface_water']);
            $("#population_" + i).html(datasToDisplay['results'][i]['population']);
            if (datasToDisplay['results'][i]['residents'].length === 1) {
                var defaultResidentsButton = document.getElementById('residents_button_x');
                var clonedResidentsButton = defaultResidentsButton;
                clonedResidentsButton = clonedResidentsButton.outerHTML.replace(/x/g, i);
                $("#residents_" + i).html(clonedResidentsButton);
                $("#residents_" + i).css("display", "table-cell");
                $("#residents_button_" + i).html(datasToDisplay['results'][i]['residents'].length + " resident");
            } else if (datasToDisplay['results'][i]['residents'].length > 1) {
                var defaultResidentsButton = document.getElementById('residents_button_x');
                var clonedResidentsButton = defaultResidentsButton;
                clonedResidentsButton = clonedResidentsButton.outerHTML.replace(/x/g, i);
                $("#residents_" + i).html(clonedResidentsButton);
                $("#residents_" + i).css("display", "table-cell");
                $("#residents_button_" + i).html(datasToDisplay['results'][i]['residents'].length + " residents" );
            } else {
                $("#residents_" + i).html("No residents" );
            };
        }
        $(".resident").on("click", function() {
            $("#modal_table_body").html('');
            $("#myModal").css("display", "block");
            residentId = event.target.id.slice(-1);
            $("#modal_header").html("Residents of " + datasToDisplay['results'][residentId]['name']);
            argsList = datasToDisplay['results'][residentId]['residents'];
            app.dataHandler.getResidentsData(argsList);
        });
        $(".close").on("click", function() {
            $("#myModal").css("display", "none");
        });
        $("#myModal").on("click", function() {
            $("#myModal").css("display", "none");
        });
        $("#planets_table").css('display', 'block');
        $("#planets_table").css('margin', 'auto');

        $("#next").on("click", function() {
                var next = datasToDisplay['next'];
                app.dataHandler.getPlanetsData(next);
        });
        $("#previous").on("click", function() {
            if (datasToDisplay['previous'] !== null) {
                var previous = datasToDisplay['previous'];
                app.dataHandler.getPlanetsData(previous);
            } else {
                alert('This is the first page!')
            }
        });
    },
    generateModalTable : function(residentsData) {
        var defaultRow = document.getElementById('residents_data_x');
        var clonedRow = defaultRow;
        var rowsNum = $("#modal_table_body").children().length;
        clonedRow = clonedRow.outerHTML.replace(/x/g, rowsNum);
        $("#modal_table_body").append(clonedRow);
        $("#residents_name_" + rowsNum).html(residentsData['name']);
        $("#residents_height_" + rowsNum).html(residentsData['height']);
        $("#residents_mass_" + rowsNum).html(residentsData['mass']);
        $("#residents_skin_color_" + rowsNum).html(residentsData['skin_color']);
        $("#residents_hair_color_" + rowsNum).html(residentsData['hair_color']);
        $("#residents_eye_color_" + rowsNum).html(residentsData['eye_color']);
        $("#residents_birth_year_" + rowsNum).html(residentsData['birth_year']);
        $("#residents_gender_" + rowsNum).html(residentsData['gender']);
    }
}