var express = require('express');
var router = express.Router();
var controllers = require('../controllers');


router.get('/:resource', function(req, res, next){
    const resource = req.params.resource;
    const controller = controllers[resource];

    controller.find(req.query, function(error, results){
        if (error){
            res.json({
                status:'fail',
                message:error
            })
            return;
        }
        res.json({
            status:'success',
            result:results
        });
    });
});

router.get('/:resource/:id', function(req, res, next){
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    controller.findID(id, function(error, results){
        if (error){
            res.json({
                status:'fail',
                message:error
            })
            return;
        }
        res.json({
            status:'success',
            result:results
        });
    });
});


router.post('/:resource', function(req, res, next){
    var resource = req.params.resource
    var controller = controllers[resource];
    controller.create(req.body, function(error, result){
        if (error){
            res.json({
                status: 'fail', 
                message: error
            });
            return;
        }
        res.json({
            status: 'success',
            result: result
        });
    });

});


module.exports = router;
