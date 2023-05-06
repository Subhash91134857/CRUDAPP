const StudentModal = require("../models/studentModel");

class StudentController {
  static createDoc = async(req, res) => {
    try {
      const { name, age, fees } = req.body;  //destructuring
      const doc = new StudentModal({
        name: name,
        age: age,
        fees:fees,
      })
      // Saving doc
 
      const result = await doc.save();
      // console.log(result);
      res.redirect('/student')
    
   } catch (error) {
      console.log(error);
   }
  };
  static getAllDoc = async(req, res) => {
    try {
      const result = await StudentModal.find()
      // console.log(result);
      res.render("index",{data:result});
    } catch (error) {
      
    }
    
  };
  static editDoc = (req, res) => {
    res.render("edit");
  };
  static updateDocById = (req, res) => {
    res.redirect("/student");
  };
  static deleteDocById = (req, res) => {
    res.redirect("/student");
  };
}

module.exports = { StudentController };
