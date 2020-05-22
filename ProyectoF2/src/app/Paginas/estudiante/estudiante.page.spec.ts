import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstudiantePage } from './estudiante.page';

describe('EstudiantePage', () => {
  let component: EstudiantePage;
  let fixture: ComponentFixture<EstudiantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
