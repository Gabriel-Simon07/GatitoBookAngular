import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticacaoGuard } from "./autenticacao/autenticacao.guard";
import { LoginGuard } from "./autenticacao/login.guard";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home',
  },
  {
    path:'animais',
    loadChildren:() => import('./animais/animais.module').then((module) => module.AnimaisModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then((module) => module.HomeModule),
    canLoad: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
