const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo, updateCheckedToDo } = require("../controllers/ToDoController");

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/updatechecked', updateCheckedToDo)
router.post('/delete', deleteToDo)

module.exports = router;