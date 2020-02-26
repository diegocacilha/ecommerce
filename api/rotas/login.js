module.exports = function(app){
    app.post('/login', function(req, res, n){
        res.json({
            msg: 'rota /login res.json'
        });
    });

}