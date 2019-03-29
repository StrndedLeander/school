import Server from "./server";

export default {
  getStudents() {
    new Promise((resolve, reject) => {
      Server()
        .get("/students")
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  getStudent(id) {
    new Promise((resolve, reject) => {
      Server()
        .get("/students/?id=" + id)
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  createStudent(params) {
    new Promise((resolve, reject) => {
      Server()
        .post("/students", params)
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  updateStudent(params) {
    new Promise((resolve, reject) => {
      Server()
        .put("/students", params)
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  deleteStudent(id) {
    new Promise((resolve, reject) => {
      Server()
        .delete("/students/" + id)
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
};
