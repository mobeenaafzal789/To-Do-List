import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks :any = [];
  title = 'notpad1';
 
  newtask(data: string){
    if(data != ""){
      this.tasks.push({id:this.tasks.length, title: data})
      console.log(this.tasks)
    }
     
  }
  removetask(id:number){
    this.tasks = this.tasks.filter((item: {id : number}) => item.id != id)
  }
  removeall(){
    this.tasks = [];
  }
 
}
