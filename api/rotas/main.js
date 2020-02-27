module.exports = (app) => {
    app.get('/', function(req, res, next){
        res.format({
            json: function(){
                res.json({
                    msg: 'teste'
                });
            },
            html: function(){
                res.redirect('/login.html');
            }
        });
    });    
}