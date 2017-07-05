

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

module.exports.update_table_record = function(TableVar){
    TableVar.update(
        {
            title:'The updated title',
        },
        {
            where: {_id: 1}
        }
    )
    .success(result => 
    console.log(result)
    )
    .error(err =>
    console.log(err)
    )
};
