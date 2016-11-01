var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://jesse:jesse@ds053156.mlab.com:53156/jlab', ['tasks']);

//Get All Tasks
router.get('/tasks', function(req, res, next){
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		} else {
			res.json(tasks);
		}
	});
});

//Save a Task
router.post('/task', function(req, res, next){
	var task = req.body;
	// console.log(task);
	if(!task.title || !(task.isDone + '')){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.tasks.save(task, function(err, task){
			if(err){
				res.send(err);
			} else {
				res.json(task);
			}
		});
	}
});

//Delete a Task
router.delete('/task/:id', function(req, res, next){
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
		if(err){
			res.send(err);
		} else {
			res.json(task);
		}
	});
});

module.exports = router;