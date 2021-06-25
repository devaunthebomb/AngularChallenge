import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlock2Component } from './code-block2.component';

describe('CodeBlock2Component', () => {
  let component: CodeBlock2Component;
  let fixture: ComponentFixture<CodeBlock2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBlock2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBlock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
