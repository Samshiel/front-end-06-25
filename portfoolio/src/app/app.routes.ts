import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"courses", component:CoursesComponent},
    {path:"hobbies", component:HobbiesComponent},
    {path:"work", component:WorkComponent}
];
