var Sequelize = require("sequelize");

var Sequelize = require("sequelize");
var connection = new Sequelize("Exponentia_Dev", "Exponentia", "Exponentia~", {
    host:"10.250.18.50",
    dialect: 'mssql'
});

// make sure you have created the database using pg Admin III 
//var sequelize = new Sequelize("postgres://huxutede:CqOxnhGdwEiEhtdmh7y54YgSG3ncnRq3@babar.elephantsql.com:5432/huxutede");

var Article = connection.define("article", {
    title: Sequelize.STRING,
    content: Sequelize.STRING
});

connection.sync().then(function() {
    Article.create({
        title: 'Demo title',
        body: 'Sample body which can be very large as the type mentioned is TEXT'
    });
});

//var Sequelize = require("sequelize");
// var connection = new Sequelize("10.250.18.50", "exponentia_readonly", "exponentia_readonly~", {
//     dialect: 'mysql'|'sqlite'|'postgres'|'mssql'
// });