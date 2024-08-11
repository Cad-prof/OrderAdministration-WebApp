

module.exports = (app) => {
    app.post("/updateblueprint", (req, res) => {
        var temp = req.body;
        // Update blueprint
        con.query(
            `UPDATE model SET blueprint = '' WHERE model_name = ${temp.model_name}`
        );
    
    });
    
}