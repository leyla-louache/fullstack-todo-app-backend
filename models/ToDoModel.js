const mongoose = require ('mongoose')

const todosSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    isChecked: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('ToDo',todosSchema)