import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAssistantComponent } from './legal-assistant.component';

describe('LegalAssistantComponent', () => {
  let component: LegalAssistantComponent;
  let fixture: ComponentFixture<LegalAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
