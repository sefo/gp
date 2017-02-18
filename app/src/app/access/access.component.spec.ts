import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { AccessComponent } from './access.component';

describe('Access', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      AccessComponent
    ]
  }));

  it('should log ngOnInit', inject([AccessComponent], (access: AccessComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    access.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
