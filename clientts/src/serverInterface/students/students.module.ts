import Server from "./students.server";
import Students from "./students.service";

// Make requests to Server and handle the data

module.exports.getAllStudents = () => {
  Server()
    .get("/students")
    .then((res: Object) => {
      // Do some with res and send students to service
      console.log(res);
      Students.getAllStudents(res);
    })
    .catch((err: Object) => {
      console.log(err);
    });
};

module.exports.getStudentById = (id: string) => {
  Server()
    .get("/students/?id=" + id)
    .then((res: Object) => {
      // Do some with res and send student to service
      console.log(res);
      Students.getStudent(res);
    })
    .catch((err: Object) => {
      console.log(err);
    });
};

module.exports.getStudentFromUnity = (unityID: string) => {
  Server()
    .get("/students/?unity=" + unityID)
    .then((res: Object) => {
      // Do some with res and send student to service
      console.log(res);
      Students.getStudent(res);
    })
    .catch((err: Object) => {
      console.log(err);
    });
};

module.exports.createStudent = (params: object) => {
  Server()
    .post("/students", params)
    .then((res: Object) => {
      // Do some with res and handle remaining client authflow
      console.log(res);
      Students.createStudent(res);
    })
    .catch((err: Object) => {
      console.log(err);
    });
};

module.exports.updateStudent = (id: string, params: object) => {
  Server()
    .put("/students/id?=" + id, params)
    .then((res: Object) => {
      // Do some with res and handle remaining client authflow
      console.log(res);
      Students.updateStudent(res);
    })
    .catch((err: Object) => {
      console.log(err);
    });
};

module.exports.updateStudent = (id: string, params: object) => {
  Server()
    .put("/students/id?=" + id, params)
    .then((res: Object) => {
      // Do some with res and handle remaining client authflow
      console.log(res);
      Students.updateStudent(res);
    })
    .catch((err: Object) => {
      console.log(err);
    });
};

module.exports.updateStudent = (id: string) => {
  Server()
    .delete("/students/id?=" + id)
    .then((res: Object) => {
      // Do some with res and handle remaining client authflow
      console.log(res);
      Students.updateStudent(res);
    })
    .catch((err: Object) => {
      console.log(err);
    });
};
