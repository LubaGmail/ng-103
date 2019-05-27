import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  viewMode = 'list';
  courses = [];
  
  count = 3;

  constructor() { }

  ngOnInit() {
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'Course 1'},
      {id: 2, name: 'Course 2'},
      {id: 3, name: 'Course 3'}
    ]
  }

  trackCourses(index, course) {
    return course ? course.id : undefined;
  }

  onAdd() {
    this.count++;
 
    this.courses.push({
      id: this.count,
      name: 'Course ' + this.count
    });
  }

  onDelete(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdate(course) {
    const index = this.courses.indexOf(course);
    this.courses[index].name = 'Updated';
  }

}
