import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresarPage } from './ingresar.page';

describe('IngresarPage', () => {
  let component: IngresarPage;
  let fixture: ComponentFixture<IngresarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
