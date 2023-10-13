import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { AffilateMarketingComponent } from './affilate-marketing/affilate-marketing.component';
import { PerformanceMarketingComponent } from './performance-marketing/performance-marketing.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomepageComponent },
  { path: "about", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "affiliate", component: AffilateMarketingComponent },
  { path: "performance", component: PerformanceMarketingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
