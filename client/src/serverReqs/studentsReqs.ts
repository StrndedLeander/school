import instance from './mainServer';

export class StudentsReqs {
  constructor() {}

  getStudent(id: string): Promise<Object> {
    return new Promise((resolve, reject) => {
      instance
        .get('/student/' + id)
        .then((res: Object) => {
          resolve(res);
        })
        .catch((err: Object) => {
          reject(err);
        });
    });
  }
}
