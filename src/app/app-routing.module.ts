import { CasePageComponent } from './case-page/case-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Case } from './models/case';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'case',
    component: CasePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
