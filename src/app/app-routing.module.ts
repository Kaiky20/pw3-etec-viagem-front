import { CadastroDeViagensComponent } from './cadastro-de-viagens/cadastro-de-viagens.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'cursos', component:CadastroDeViagensComponent },
  { path: 'diciplina', component:DetalhesViagemComponent },
  { path: '**', component:ExclusaoViagemComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
