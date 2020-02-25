module.exports = (app) => {
    
    app.get('/', function(req, res, next){
        res.format(
            {
                json: function(){
                    res.json({
                        msg: 'teste'
                    });
                },
                html: function(){
                    console.log(res.render('main'));
                }
            }
        );
    });

    app.get('/teste', function(req, res, next){
        res.json({
            msg: 'ola mundo'
        });
    });
    
}