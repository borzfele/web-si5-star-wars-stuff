var app = app || {};

app.dataHandler = {
    defUrl: "http://swapi.co/api/planets/?page=1",
    getPlanetsData : function(url) {
        $.getJSON(url, function(response) {
            app.dom.generateTable(response);
        });
    },
    getResidentsData : function(url) {
        $.getJSON(url, function(response) {
            app.dom.generateModalTable(response);
        });
    }
}