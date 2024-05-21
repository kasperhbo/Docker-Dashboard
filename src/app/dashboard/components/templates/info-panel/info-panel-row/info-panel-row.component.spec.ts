import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelRowComponent } from './info-panel-row.component';

describe('InfoPanelRowComponent', () => {
  let component: InfoPanelRowComponent;
  let fixture: ComponentFixture<InfoPanelRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPanelRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPanelRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
