import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletedTasksPage } from './completed-tasks.page';

describe('CompletedTasksPage', () => {
  let component: CompletedTasksPage;
  let fixture: ComponentFixture<CompletedTasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTasksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
