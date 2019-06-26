import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as faker from 'faker';


export interface Todo {
    task: string;
    priority: number;
    createdAt: number;
}

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todosCollection: AngularFirestoreCollection<Todo>;
    private todos: Observable<Todo[]>;

    constructor(db: AngularFirestore) {
        this.todosCollection = db.collection<Todo>('todos');
        this.todos = this.todosCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        );
        for (let i = 0; i < 10; i++) {
            db.collection('todos').add({
                task: faker.lorem.sentence(Number('5'), Number('10')),
                priority: faker.random.number(10),
                createdAt: faker.date.past(2).getTime()
            });
        }
    }

    getTodos() {
        return this.todos;
    }

    getTodo(id) {
        return this.todosCollection.doc<Todo>(id).valueChanges();
    }

    updateTodo(todo: Todo, id: string) {
        return this.todosCollection.doc<Todo>(id).update(todo);
    }

    addTodo(todo: Todo) {
        return this.todosCollection.add(todo);
    }

    removeTodo(id) {
        return this.todosCollection.doc<Todo>(id).delete();
    }
}
