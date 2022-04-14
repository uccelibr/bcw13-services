import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'funcionario',
    loadChildren: () => { // Lazy Loading
      return import('./funcionario/funcionario.module')
      .then((m) => {
        return m.FuncionarioModule
      })
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {}