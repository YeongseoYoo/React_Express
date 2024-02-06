var express = require('express');
var router = express.Router();

/* GET Todo page */
const Todo = require("../model/Todomodel");

router.get("/", function(req, res, next) {
    Todo.find()
    .then(boards => res.json(boards))
    .catch(err=> next(err))
});

/* POST Todo page */
router.post("/", function(req, res, next) {
    const { content, chosung, createdAt} = req.body; // chosung 추가
    const newTodo = new Todo({
        content,
        createdAt
    });
    newTodo.save()
        .then(savedTodo => res.json(savedTodo))
        .catch(err => next(err));
});

/* PUT Update Todo page */
router.put("/:index", function(req, res, next) {
    const index = req.params.index;
    const newText = req.body.text;

    Todo.findOneAndUpdate(
        { /* Your query condition based on index */ },
        { $set: { content: newText } },
        { new: true }
    )
        .then(updatedTodo => res.json(updatedTodo))
        .catch(err => next(err));
});

/* DELETE Todo page */
router.delete("/:index", function(req, res, next) {
    const index = req.params.index;

    Todo.findOneAndDelete(
        { /* Your query condition based on index */ }
    )
        .then(() => res.json({ message: "Todo deleted successfully" }))
        .catch(err => next(err));
});


module.exports = router;
