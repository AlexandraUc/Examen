import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaProdusComponent } from './comanda-produs.component';

describe('ComandaProdusComponent', () => {
  let component: ComandaProdusComponent;
  let fixture: ComponentFixture<ComandaProdusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandaProdusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComandaProdusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
