import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../services/dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule} from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [
    MyProfileComponent,
    DashboardComponent,
    AboutComponent,
    ProjectsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DashboardService]
})
export class AdminModule { }
