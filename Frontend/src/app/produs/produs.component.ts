import { Component } from '@angular/core';
import { Produs, PostProdus } from './produs.model';
import { CommonModule } from '@angular/common';
import { ProdusService } from '../produs.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-produs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './produs.component.html',
  styleUrl: './produs.component.scss'
})
export class ProdusComponent implements OnInit{
  produse: Produs[] = [];
  form!: FormGroup;

  constructor(private produsService: ProdusService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nume: new FormControl(''),
      pret: new FormControl('')
    });
  }

  getPr(){
    this.produsService.getProduse().subscribe((produse) => (this.produse = produse));
  }

  postPr(){
    if(this.form){
      const nume = this.form.get('nume')?.value;
      const pret = this.form.get('pret')?.value;

      this.produsService.postProdus({nume: nume, pret: pret}).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
  }
}
