import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ComandaProdus } from './comprod.model';
import { ComandaProdusService } from '../comanda-produs.service';

@Component({
  selector: 'app-comanda-produs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comanda-produs.component.html',
  styleUrl: './comanda-produs.component.scss'
})
export class ComandaProdusComponent implements OnInit{
  form!: FormGroup;

  constructor(private comProdService: ComandaProdusService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      produsId: new FormControl(''),
      comandaId: new FormControl('')
    });
  }

  putCopr(){
    if(this.form){
      const produsId = this.form.get('produsId')?.value;
      const comandaId = this.form.get('comandaId')?.value;
      
      this.comProdService.PutComandaProdus({produsId: produsId, comandaId: comandaId}).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
  }
}
