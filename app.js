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

// connection.sync().then(function() {
//     Article.create({
//         title: 'Demo title',
//         content: 'Sample body which can be very large as the type mentioned is TEXT'
//     });
// });

connection.sync().then(function() {
    Article.findById(3).then(function(article){
        console.log(article.dataValues);
    })
});

//var Sequelize = require("sequelize");
// var connection = new Sequelize("10.250.18.50", "exponentia_readonly", "exponentia_readonly~", {
//     dialect: 'mysql'|'sqlite'|'postgres'|'mssql'
// });
