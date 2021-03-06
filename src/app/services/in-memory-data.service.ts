import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry, Habit } from "../data-types";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const habits = [
      { id: 1, name: 'Code', entryList: generateEntryList() },
      { id: 2, name: 'Exercise', entryList: generateEntryList() },
      { id: 3, name: 'Practice Japanese', entryList: generateEntryList() },
      { id: 4, name: 'Don\'t Overeat', entryList: generateEntryList() }
    ];

    return { habits };
  }
}

function generateEntryList(): Entry[] {
  const twentyFourHoursInMs = 8.64e+7;
  let entryList: Entry[] = [{ timestamp: Date.now(), value: oneOrZero() },];

  for (let i = 1; i < 7; i++) {
    entryList.push({
      timestamp: Date.now() - (twentyFourHoursInMs * i),
      value: oneOrZero()
    });
  }

  return entryList;
}

function oneOrZero(): number {
  return Math.round(Math.random());
}
