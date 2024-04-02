import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation:string = "";
  UserName:string = "";
  NoOfTeamMeambers:number = 0;
  TotalCostOfAllProjects:number = 0;
  PendingTasks:number = 0;
  UpcomingProject:number = 0;
  ProjectCost:number = 0;
  CurrentExpenditure:number = 0;
  AvailableFunds:number = 0;
  Clients:string[] = [];
  Projects:string[] = [];
  TeamMemberSummary:any[] = [];
  TeamMembers:any[] = [];
  Years:number[] = [];
  ProjectName:string = "";
  CurrentYear:string = "";
  Today!:Date; 
  search!: string;


  constructor(private dashboardService: DashboardService) {  }
  ngOnInit(){
      this.Designation = "Team Leader";
      this.UserName = "Chandler";
      this.NoOfTeamMeambers = 50;
      this.TotalCostOfAllProjects = 100;
      this.PendingTasks = 12;
      this.UpcomingProject = 5;
      this.ProjectCost = 30;
      this.CurrentExpenditure = 18;
      this.AvailableFunds = 12;
      this.Clients = ["Nielsen Consumer llc", "Macapp studio", "Freshworks software solutions"];
      this.Projects = ["Digital Model", "Flex to angular conversion", "Nielsen Enhancement", "DI factory"];
      this.ProjectName = "Projects";
      this.CurrentYear = "year";
      this.Today = new Date();
      this.TeamMemberSummary = this.dashboardService.getTeamMemberSummary();
      this.TeamMembers = this.dashboardService.getTeamMember();

      for(var year = 2015; year<=2021; year++){
        this.Years.push(year);
      }
  }

  onProjectChange(event:any){
    this.ProjectName = event.target.innerHTML
    if(event.target.innerHTML === "Digital Model") {
      this.ProjectCost = 43;
      this.CurrentExpenditure = 24;
      this.AvailableFunds = 19;
      
    }
    else if(event.target.innerHTML === "Flex to angular conversion"){
      this.ProjectCost = 49;
      this.CurrentExpenditure = 38;
      this.AvailableFunds = 11;
    }
    else if(event.target.innerHTML === "Nielsen Enhancement"){
      this.ProjectCost = 30;
      this.CurrentExpenditure = 15;
      this.AvailableFunds = 15;
    }
    else if(event.target.innerHTML === "DI factory"){
      this.ProjectCost =35;
      this.CurrentExpenditure = 17;
      this.AvailableFunds = 18;
    }
  }

  onYearChange(event:any){
    this.CurrentYear = event.target.innerHTML;
  }


}
