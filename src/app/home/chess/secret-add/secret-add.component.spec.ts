import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecretAddComponent } from './secret-add.component';

describe('SecretAddComponent', () => {
  let component: SecretAddComponent;
  let fixture: ComponentFixture<SecretAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecretAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
