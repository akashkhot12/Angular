import { TestBed } from '@angular/core/testing';

import { PostmanTsService } from './postman.ts.service';

describe('PostmanTsService', () => {
  let service: PostmanTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostmanTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
