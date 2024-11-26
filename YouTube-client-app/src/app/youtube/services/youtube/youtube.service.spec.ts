import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  let service: YoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(YoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
