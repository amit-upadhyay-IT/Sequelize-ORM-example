

module.exports.insert_into_table = function(TableVar){
    TableVar.create({
        title: 'Demo title',
        content: 'Sample body which can be very large as the type mentioned is TEXT'
    });
};

module.exports.select_from_table = function(TableVar, the_id) {
     TableVar.findById(the_id).then(function(thedata){
        console.log(thedata.dataValues);
    })

    // Project.findOne({ where: {title: 'Demo title'} }).then(project => {
    //     //project will be the first entry of the Projects table with the title 'aProject' || null
    //     console.log(project);
    // })
}

module.exports.update_table_record = function(TableVar, record_id){
    TableVar.update(
        {
            title:'The updated title',
        },
        {
            where: {id: record_id}
        }
    )
    // .success(function() { 

    //  console.log("Project with id =1 updated successfully!");

    // }).error(function(err) { 

    //     console.log("Project update failed !");
    //     //handle error here

    // });
}

module.exports.delete_table_record = function(TableVar, record_id){
    TableVar.destroy({
        where: {
            id:record_id
        }
    })
    .then(function(rowDeleted){ // rowDeleted will return number of rows deleted
    if(rowDeleted === 1){
        console.log('Deleted successfully');
    }
    }, function(err){
        console.log(err); 
    });
};

module.exports.transaction_querries = function(sequelize, TableVar, ){

    return sequelize.transaction().then(function (t) {
        return TableVar.create({
            title: 'Homer',
            content: 'Simpson'
        }, {transaction: t})
        .then(function (TableVar) {
            return TableVar.update(
            {
                title:'The updated title',
            },
            {
                where: {id: 3}
            }, {transaction: t});
            })
        .then(function () {
            return t.commit();
        }).catch(function (err) {
            return t.rollback();
        });
    });
};
