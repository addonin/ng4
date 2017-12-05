import {Injectable, Input} from '@angular/core';

@Injectable()
export class ParticipantsService {

  @Input()
  participants: string[] = [];

  constructor() {}

  addParticipant(name: string) {
    this.participants.push(name);
  }

  getParticipants() {
    return this.participants;
  }

}
