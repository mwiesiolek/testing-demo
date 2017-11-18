import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {Observable} from "rxjs";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with items returned from server', () => {
    let todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });
});
