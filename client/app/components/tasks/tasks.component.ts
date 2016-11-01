import {Component} from '@angular/core';
import {Task} from '../../../Task';
import {TaskService} from '../../services/task.service';

@Component({
	moduleId: module.id,
	selector: 'tasks',
	templateUrl: 'tasks.component.html'
})
export class TasksComponent {
	task: Task[];
	title: string;

	constructor(private taskService: TaskService){
		
	}


}