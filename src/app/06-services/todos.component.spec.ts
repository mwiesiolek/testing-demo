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

  it('should call server to save changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake((item) => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo returned from server', () => {
    let todo = {id: 1};

    spyOn(service, 'add').and.callFake(item => {
      return Observable.from([ todo ]);
    });

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set message property if server returns error', () => {
    let error = 'error from server';
    spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call server to delete todo item if user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.deleteItem(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call server to delete todo item if user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.deleteItem(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
