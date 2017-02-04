var express = require('express');
var router = express.Router();
var controllers = require('../controllers');


router.get('/:resource', function(req, res, next){
    const resource = req.params.resource;
    const controller = controllers[resource];

    controller.find(req.query, function(err, results){
        if (err){
            res.json({
                status:'fail',
                message:err
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
    const resource = req.params.resource;
    const id = req.params.id;
    const controller = controllers[resource];

    controller.findID(id, function(err, result){
        if (err){
            res.json({
                status:'fail',
                message:err
            });
            return;
        }
        res.json({
            status:'success',
            result: result
        });
    });

});

router.post('/:resource', function(req, res, next){
    const resource = req.params.resource;
    const controller = controller[resource];

    controller.create(req.body, function(err, result){
        if (err){
            res.json({
                status:'fail',
                message:err
            })
            return;
        }
        res.json({
            status:'success',
            result: result
        })
    });
});


module.exports = router;