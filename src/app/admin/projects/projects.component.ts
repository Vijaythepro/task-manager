import { Project } from './../../modal/project';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  ProjectList:Project[]= [];
  newProjects:Project= new Project();
  editProjectList:Project= new Project();
  editIndex:any = null;
  deleteProjectList:Project = new Project();
  deleteIndex:any = null;
  searchBy:string = "Project Name";
  searchText:string = "";
  Projects:string[] = [];
  ProjectName:string = "";

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.Projects = ["projectID", "projectName", "dateOfStart", "teamSize"];
    this.projectService.getAllProjects().subscribe(
      (response: Project[]) =>{
        this.ProjectList = response;
      }
    );
    this.ProjectName ="Project Name"

  }

  onClickSave() {
    this.projectService.insertNewProject(this.newProjects).subscribe(
      (response) =>{
        var proj:Project = new Project();
        proj.projectID = this.newProjects.projectID;
        proj.projectName = this.newProjects.projectName;
        proj.dateOfStart = this.newProjects.dateOfStart;
        proj.teamSize = this.newProjects.teamSize;
        this.ProjectList.push(proj);

        //clear the text box when new project is created
        this.newProjects.projectID = 0;
        this.newProjects.projectName = null;
        this.newProjects.dateOfStart = null;
        this.newProjects.teamSize =0;

      }, (error) =>{
        console.log(error);
      })

  }
  
  onEditClick(event:any, index:number){
       this.editProjectList.projectID = this.ProjectList[index].projectID;
       this.editProjectList.projectName = this.ProjectList[index].projectName;
       this.editProjectList.dateOfStart = this.ProjectList[index].dateOfStart;
       this.editProjectList.teamSize = this.ProjectList[index].teamSize;
       this.editIndex = index;
  }

  onUpdate(){
    this.projectService.editLiveProject(this.editProjectList).subscribe(
      (response:any) =>{
        debugger;
        var proj:Project = new Project();
        proj.projectID = response.projectID;
        proj.projectName = response.projectName;
        proj.dateOfStart = response.dateOfStart;
        proj.teamSize = response.teamSize;
        this.ProjectList[this.editIndex] = proj;

        //clear the edit modal text boxes
        this.editProjectList.projectID = 0;
        this.editProjectList.projectName = null;
        this.editProjectList.dateOfStart =null;
        this.editProjectList.teamSize = 0;
      }, (error) =>{
        console.log(error);
      }
    )
  }

  onDeleteClick(event:any, i:number) {
       this.deleteProjectList.projectID = this.ProjectList[i].projectID;
       this.deleteProjectList.projectName = this.ProjectList[i].projectName;
       this.deleteProjectList.dateOfStart = this.ProjectList[i].dateOfStart;
       this.deleteProjectList.teamSize = this.ProjectList[i].teamSize;
       this.deleteIndex = i;
  }

  deleteItem(){
    this.projectService.deleteLiveProject(this.deleteProjectList.projectID).subscribe(
      (response)=>{
        this.ProjectList.splice(this.deleteIndex, 1);
        this.deleteProjectList.projectID = 0;
        this.deleteProjectList.projectName = null;
        this.deleteProjectList.dateOfStart = null;
        this.deleteProjectList.teamSize = 0; 
      },
      (error)=>{ 
        console.log(error);
      }
    )
  }

   onSearchChange(event:any) {
    this.ProjectName = event.target.innerHTML
  }

  onSearchClick(){
    debugger;
    this.projectService.searchProject(this.ProjectName, this.searchText).subscribe(
      (response) =>{
        this.ProjectList = response;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

 


}
