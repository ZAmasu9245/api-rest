const express = require('express');
const sqliteServer = require('sqlite3').verbose();
const body_parser = require('body-parser');
const apiRouter = require('./apiRouter').router;

const server = express();
const db = new sqliteServer.Database(__dirname + "/Site.db")

server.use(body_parser.urlencoded({ extended: true }));
server.use(body_parser.json());

server.get("/", function (req, res) {
    res.setHeader("Content-Type", "text/json");
    res.status(200).send('{"message": "The API has been launched with success"}')
});

server.use('/api/', apiRouter);

server.listen(8080, function() {
    console.log("Serveur en écoute !");
});
