var Sequelize = require("sequelize");

var Sequelize = require("sequelize");
var connection = new Sequelize("Exponentia_Dev", "Exponentia", "Exponentia~", {
    host:"10.250.18.50",
    dialect: 'mssql'
});

// make sure you have created the database using pg Admin III 
// var sequelize = new Sequelize("postgres://huxutede:CqOxnhGdwEiEhtdmh7y54YgSG3ncnRq3@babar.elephantsql.com:5432/huxutede");

var table_name = "StoryTable";

var TableVar = connection.define(table_name, {
    title: Sequelize.STRING,
    content: Sequelize.STRING
});

var sequelizeFile = require('./sequelizefile.js');

connection.sync().then(function() {
    sequelizeFile.select_from_table(TableVar, 2);
});



//----------------------------------------
// connection.sync().then(function() {
//     TableVar.create({
//         title: 'Demo title',
//         content: 'Sample body which can be very large as the type mentioned is TEXT'
//     });
// });

// connection.sync().then(function() {
//     TableVar.findById(3).then(function(article){
//         console.log(article.dataValues);
//     })
// });
