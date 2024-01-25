import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UtilizatorComponent } from './utilizator/utilizator.component';
import { ProdusComponent } from './produs/produs.component';
import { ComandaComponent } from './comanda/comanda.component';
import { ComandaProdusComponent } from './comanda-produs/comanda-produs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UtilizatorComponent, ProdusComponent, ComandaComponent, ComandaProdusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontend';
}
