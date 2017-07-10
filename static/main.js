var app = app || {};

app.init = function() {
    app.dataHandler.getPlanetsData(app.dataHandler.defUrl);
}

app.init();