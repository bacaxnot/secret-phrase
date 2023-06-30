import { Component, OnInit } from '@angular/core';
import { Message, STORY } from './secret.data';
import { isTheDay, passedDays } from 'src/app/constants/constraints';

@Component({
  selector: 'app-secret-story',
  templateUrl: './secret-story.component.html',
  styleUrls: ['./secret-story.component.sass'],
})
export class SecretStoryComponent implements OnInit {
  unlockStory: boolean = false;
  unlockFinal: boolean = false;
  unlockedMessages: Message[] = [];

  ngOnInit(): void {
    const unlockedDays = passedDays();
    this.unlockStory = unlockedDays > 0;
    this.unlockFinal = isTheDay();

    if (unlockedDays < 0 || unlockedDays >= STORY.length) {
      this.unlockedMessages = [...STORY];
    } else {
      this.unlockedMessages = STORY.slice(0, unlockedDays);
    }
  }
}
