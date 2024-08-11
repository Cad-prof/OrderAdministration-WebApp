

module.exports = (app) => {
    app.post("/insert", (req, res) => {
        console.log("Insert start");
        console.log(`insert\n${req.body}`);
        var temp = req.body;
        var order_id = 1;
        var sw = 0;
        //insert orders table
        con.query("SELECT max(order_id) as max FROM orders", (err, result) => {
            if (result.length != 0) order_id = parseInt(result[0].max) + 1;
            if (isNaN(order_id)) order_id = 1;
            con.query(
                `INSERT INTO orders VALUES (${order_id},LOCALTIME(),${
                temp.cus_id
              },'New order')`,
                (err, result) => {
                    if (err) throw err;
                    console.log("jui1");
    
                    // insert model table
                    var model_id = 1;
                    var model_price = 0; //TO EDIT
    
                    con.query(
                        "SELECT max(model_id) as max FROM model",
                        (err, result) => {
                            if (result.length != 0) model_id = parseInt(result[0].max) + 1;
                            if (isNaN(model_id)) model_id = 1;
                            var model = [];
                            for (var i = 0; i < temp.items.length; i++) {
                                model.push([
                                    model_id + i,
                                    model_price,
                                    temp.items[i].model_name,
                                    "",
                                    parseInt(temp.cus_id)
                                ]);
                            }
                            console.log(model);
                            con.query(
                                "INSERT INTO model VALUES?", [model],
                                (err, result) => {
                                    if (err) throw err;
                                    console.log("jui2");
                                }
                            );
    
                            var model2 = [];
                            for (var i = 0; i < temp.items.length; i++) {
                                model2.push([order_id, model_id + i, temp.items[i].amount]);
                            }
                            console.log(model2);
                            con.query(
                                "INSERT INTO contain VALUES?", [model2],
                                (err, result) => {
                                    if (err) throw err;
                                    console.log("jui3");
                                    res.send(null);
                                }
                            );
                        }
                    );
                }
            );
        });
    
    
    });
    
}


