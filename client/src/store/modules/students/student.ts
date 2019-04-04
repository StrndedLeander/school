import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import store from '../../../store';
import { StudentsReqs } from '../../../serverReqs/studentsReqs';

@Module({
  namespaced: true,
  name: 'student',
  store
})
class StudentModule extends VuexModule {
  req: StudentsReqs = new StudentsReqs();
  student: Object = {};

  @Action
  getStudent(id: string) {
    this.req
      .getStudent(id)
      .then((res: Object) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  @Mutation
  setStudent(student: Object) {
    this.student = student;
  }
}

export default getModule(StudentModule);
