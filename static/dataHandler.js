var app = app || {};

app.dataHandler = {
    defUrl: "http://swapi.co/api/planets/?page=1",
    planets : [],
    getPlanetsData : function(url) {
        $.getJSON(url, function(response) {
            app.dom.generateTable(response);
        });
    },
    getResidentsData : function(urlList) {
        for (i = 0; i < urlList.length; i++) {
            $.getJSON(urlList[i], function(response) {
                app.dom.generateModalTable(response);
            });
        }
    },
    userRegistration : function(data) {
        $.post("/registration", data, function() {
        });
    }
}