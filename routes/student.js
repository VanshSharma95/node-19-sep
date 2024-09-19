const express =require('express');
const studentcontroller=require('../controllers/studentcontroller')
const router = express.Router();
router.post('/add/user',studentcontroller.addStudent)
router.get('/getstudent',studentcontroller.getStudents)
module.exports=router;
