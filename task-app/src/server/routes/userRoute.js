const express = require("express");
const router = express.Router();
const user = require("../models/sample");

router.route("/create").post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const notelist = req.body.notelist;
    const todolist = req.body.todolist;
    console.log(">>> ccleae: ", req.body);
    const newUser = new user({
        firstname,
        lastname,
        email,
        password,
        notelist,
        todolist
    
    });
    console.log(">>> e: ", newUser);
    newUser.save();
});

router.route("/update").post((req, res)  =>{

    console.log(">>> u: ", req.body);
    user.update({email: req.body.email}, {
        $set: {
            notelist: req.body.notelist
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});

router.route("/updatetodo").post((req, res)  =>{

    console.log(">>> u: ", req.body);
    user.update({email: req.body.email}, {
        $set: {
            todolist: req.body.todolist
        }
    }, function (err, samples) {
        if (err)
            res.send(err);
        res.status(200);
        res.json(samples);
    })
});


router.route("/users").get((req, res) => {
    user.find()
        .then(findUsers => res.json(findUsers))
});


module.exports = router;