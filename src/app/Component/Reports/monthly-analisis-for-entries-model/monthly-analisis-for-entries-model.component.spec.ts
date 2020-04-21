import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyAnalisisForEntriesModelComponent } from './monthly-analisis-for-entries-model.component';

describe('MonthlyAnalisisForEntriesModelComponent', () => {
  let component: MonthlyAnalisisForEntriesModelComponent;
  let fixture: ComponentFixture<MonthlyAnalisisForEntriesModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyAnalisisForEntriesModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyAnalisisForEntriesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
