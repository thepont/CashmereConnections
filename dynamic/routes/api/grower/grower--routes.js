var routes = {
    '/api/v1/grower' : {
        //post a new grower, adds a new grower to the system
        post : function(req,res){
            var grower = req.param.grower;
        },
        //returns currently logged in grower
        get : function(req, res){
            
        }
    },
    // updates an existing grower
    // permissions engine, must be the current grower or an admin
    '/api/v1/grower/:id' : {
        put : function(req, res){
             
        }
    }

}
