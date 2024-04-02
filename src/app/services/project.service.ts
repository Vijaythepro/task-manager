import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Project } from '../modal/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects():Observable<Project[]>{
    return this.httpClient.get<Project[]>('http://localhost:9090/api/projects');
  }

  insertNewProject(newProject:Project):Observable<Project[]>{
    return this.httpClient.post<Project[]>('http://localhost:9090/api/projects', newProject);
  }

  editLiveProject(editProject:Project):Observable<Project[]> {
    return this.httpClient.put<Project[]>('http://localhost:9090/api/projects', editProject);
  }

  deleteLiveProject(ProjectId:number):Observable<string>{
    return this.httpClient.delete<string>('http://localhost:9090/api/projects?ProjectID=' + ProjectId);
  }

  searchProject(searchBy:string, searchText: string):Observable<Project[]>{
    return this.httpClient.get<Project[]>('http://localhost:9090/api/projects/search/' + searchBy + '/' + searchText, {responseType:'json'});
  }

}
