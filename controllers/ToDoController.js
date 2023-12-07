const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async(req,res)=>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
}
module.exports.saveToDo = async(req,res)=>{
    const { text, isChecked } = req.body

    ToDoModel.create({text, isChecked})
    .then((data) => {
        console.log("Added Successfully");
        console.log(data);
        res.send(data);

    })
}
module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel.findByIdAndUpdate(_id,{text})
    .then(() => res.send("Updated.."))
    .catch((err) => console.log(err))
}

module.exports.updateCheckedToDo = async (req, res) => {
    const {_id, isChecked} = req.body
    ToDoModel.findByIdAndUpdate(_id,{isChecked})
    .then(() => res.send("Checked Updated.."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body
    ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted.."))
    .catch((err) => console.log(err))
}