var Sequelize = require("sequelize");
var ted = require("tedious");
///var Sequal_auto = require("sequelize-auto");

var connection = new Sequelize("Exponentia_Dev", "Exponentia", "Exponentia~", {
    host:"10.250.18.50",
    dialect: 'tedious'
});

/// var connection = new Sequal_auto("Exponentia_Dev", "Exponentia", "Exponentia~", {
///     host:"10.250.18.50",
///     dialect: 'mssql'
/// });

// make sure you have created the database using pg Admin III 
// var sequelize = new Sequelize("postgres://huxutede:CqOxnhGdwEiEhtdmh7y54YgSG3ncnRq3@babar.elephantsql.com:5432/huxutede");

var table_name = "StoryTable";

var TableVar = connection.define(table_name, {
    title: Sequelize.STRING,
    content: Sequelize.STRING
});

var sequelizeFile = require('./sequelizefile.js');

function sample_calling_sp()
{
//     connection.query('CALL Insert_Amit();').spread(
//     function (settingName1, settingName2, settingName3, users) {
// });

    connection.query('Insert_Amit @ID=\'02\', @NAME=\'Girdhar\', @COUNTRY=NULL')
    .then(function(result) {
        console.log('RESULT', result);
    })
    .error(function(err) {
        console.log(err);
    });
}

connection.sync().then(function() {
    ///console.log(connection.tables);
    // sequelizeFile.select_from_table(TableVar, 2);
    //sequelizeFile.update_table_record(TableVar, 1);

    //console.log(sequelizeFile.transaction_querries(connection, TableVar));

    sample_calling_sp();
});
