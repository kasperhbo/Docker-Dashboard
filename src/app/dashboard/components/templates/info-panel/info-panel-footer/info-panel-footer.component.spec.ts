import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelFooterComponent } from './info-panel-footer.component';

describe('InfoPanelFooterComponent', () => {
  let component: InfoPanelFooterComponent;
  let fixture: ComponentFixture<InfoPanelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPanelFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
