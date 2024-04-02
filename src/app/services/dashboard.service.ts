import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMemberSummary(){
    var teamMember = [
        {Region:"chennai", TeamMemberCount: 34, UnAvailableMember: 4},
        {Region:"Hyderabad", TeamMemberCount: 100, UnAvailableMember: 10},
        {Region:"las vegas", TeamMemberCount: 250, UnAvailableMember: 20},
        {Region:"new york", TeamMemberCount: 424, UnAvailableMember: 50},
      ];
      return teamMember;
  }

  getTeamMember(){
    var teamMemberList = [
        {Region: "chennai", Members:[
          {Id:3043, Name: "scofiled", Status: "Available"},
          {Id:1267, Name: "joey", Status: "Available"},
          {Id:2342, Name: "michael", Status: "busy"},
          {Id:1222, Name: "sara", Status: "Available"},
          {Id:1543, Name: "carlo", Status: "UnAvailable"}
        ]},
        {Region: "Hyderabad", Members:[
          {Id:3043, Name: "scofiled", Status: "Available"},
          {Id:3045, Name: "joey", Status: "Available"},
          {Id:3046, Name: "michael", Status: "busy"},
          {Id:3049, Name: "sara", Status: "Available"},
          {Id:3048, Name: "carlo", Status: "UnAvailable"}
        ]},
        {Region: "las vegas", Members:[
          {Id:3043, Name: "scofiled", Status: "Available"},
          {Id:3043, Name: "joey", Status: "Available"},
          {Id:3043, Name: "michael", Status: "busy"},
          {Id:3043, Name: "sara", Status: "Available"},
          {Id:3043, Name: "carlo", Status: "UnAvailable"}
        ]},
        {Region: "New york", Members:[
          {Id:3043, Name: "scofiled", Status: "Available"},
          {Id:3043, Name: "joey", Status: "Available"},
          {Id:3043, Name: "michael", Status: "busy"},
          {Id:3043, Name: "sara", Status: "Available"},
          {Id:3043, Name: "carlo", Status: "UnAvailable"}
        ]}
      ];
      return teamMemberList;
  }
}
