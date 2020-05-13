import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CalenderSectionComponent } from "./calendar-section.component";

describe("CalenderSectionComponent", () => {
  let component: CalenderSectionComponent;
  let fixture: ComponentFixture<CalenderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalenderSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
