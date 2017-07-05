

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
};

module.exports.delete_table_record = function(TableVar, record_id){
    TableVar.destroy({
        where: {
            id:record_id
        }
    })
};
