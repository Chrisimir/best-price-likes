import { LoginComponent } from "./login/login.component";
import { OffersComponent } from "./offers/offers.component";
import { UserPageComponent } from "./user-page/user-page.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "offers", pathMatch: "full" },
  { path: "user-page", component: UserPageComponent },
  { path: "offers", component: OffersComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
