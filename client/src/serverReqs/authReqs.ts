import instance from './mainServer';

export class AuthReqs {
  constructor() {}

  signIn(): Promise<Object> {
    return new Promise((resolve, reject) => {
      instance.post('/login').then((res) => {
        resolve(res);
      });
    });
  }
}
