/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FriendshipService } from './friendship.service';

describe('FriendshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendshipService]
    });
  });

  it('should ...', inject([FriendshipService], (service: FriendshipService) => {
    expect(service).toBeTruthy();
  }));
});
