import { TestBed } from '@angular/core/testing';

import { ChatSericeService } from './chat-serice.service';

describe('ChatSericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatSericeService = TestBed.get(ChatSericeService);
    expect(service).toBeTruthy();
  });
});