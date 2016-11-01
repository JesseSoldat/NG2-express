import {Component} from '@angular/core';
import {Task} from '../../../Task';
import {TaskService} from '../../services/task.service';

@Component({
	moduleId: module.id,
	selector: 'tasks',
	templateUrl: 'tasks.component.html'
})
export class TasksComponent {
	tasks: Task[];
	title: string;

	constructor(private taskService: TaskService){
		this.taskService.getTasks()
			.subscribe(tasks => {
				// console.log(tasks);
				this.tasks = tasks;
			});	
	}
	addTask(event){
		event.preventDefault();
		let newTask = {
			title: this.title,
			isDone: false
		};
		// console.log(newTask);
		this.taskService.addTask(newTask)
			.subscribe(task => {
				this.tasks.push(task);
				this.title = '';
			});
	}



}