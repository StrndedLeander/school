import Server from "./students.server";
import Students from "./students.service";

// Make requests to Server and handle the data

module.export.getAllStudents = () => {
  Server()
    .get("/students")
    .then(res => {
      // Do some with res and send students to service
      console.log(res);
      Students.getAllStudents(res.students);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.getStudentById = id => {
  Server()
    .get("/students/?id=" + id)
    .then(res => {
      // Do some with res and send student to service
      console.log(res);
      Students.getStudent(res.student);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.createStudent = params => {
  Server()
    .post("/students", params)
    .then(res => {
      // Do some with res and handle remaining client authflow
      console.log(res);
      Students.createStudent(res.student);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.updateStudent = (id, params) => {
  Server()
    .put("/students/id?=" + id, params)
    .then(res => {
      // Do some with res and handle remaining client authflow
      console.log(res);
      Students.updateStudent(res.student);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.updateStudent = (id, params) => {
  Server()
    .put("/students/id?=" + id, params)
    .then(res => {
      // Do some with res and handle remaining client authflow
      console.log(res);
      Students.updateStudent(res.student);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.updateStudent = id => {
  Server()
    .delete("/students/id?=" + id)
    .then(res => {
      // Do some with res and handle remaining client authflow
      console.log(res);
      Students.updateStudent(res.student);
    })
    .catch(err => {
      console.log(err);
    });
};
