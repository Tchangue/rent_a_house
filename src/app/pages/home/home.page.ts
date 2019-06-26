import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo, TodoService} from '../../services/todo.service';
import {NavController} from '@ionic/angular';
import {SearchPage} from '../search/search.page';
import {Router} from '@angular/router';
import {LanguagePage} from '../language/language.page';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    // @ViewChild('mysearch') navCtrl: NavController;
    private todos: Todo[];

    constructor(private router: Router, private todoService: TodoService) {
        /*this.todoService.getTodos().subscribe(res => {
            this.todos = res;
        });*/
    }

    ngOnInit() {}
}
