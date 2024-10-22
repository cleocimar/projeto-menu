import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {AulaComponent} from './aula/aula.component';
import {ComentarioComponent } from './aula/comentario/comentario.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '', component: MainComponent, children: [
            {path: 'aula', component: AulaComponent},
            {path: 'aula/:action', component: AulaComponent},
        ]
    },
];
