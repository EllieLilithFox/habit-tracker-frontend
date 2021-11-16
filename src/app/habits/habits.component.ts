import { Component, OnInit } from '@angular/core';
import { Habit } from '../data-types';
import { HabitsService } from '../services/habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss']
})
export class HabitsComponent implements OnInit {
  habits: Habit[] = [];
  weekdays = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

  constructor(private habitsService: HabitsService) { }

  ngOnInit(): void {
    const currentDay = Date().slice(0, 3);
    const dayIndex: number = this.weekdays.findIndex((i) => i == currentDay);
    for (let i = 0; i < dayIndex; i++) {
      const shiftDay = this.weekdays.shift()
      this.weekdays.push(shiftDay!);
    }
    this.getHabits();
  }

  getHabits(): void {
    this.habitsService.getHabits()
      .subscribe(habits => this.habits = habits)
  }

  toggleEntryValue(habit: Habit, dayIndex: number): void {
    const habitIndex = this.habits.findIndex(h => h == habit);
    if (this.habits[habitIndex].entryList[dayIndex].value == 0) {
      this.habits[habitIndex].entryList[dayIndex].value = 1;
    } else {
      this.habits[habitIndex].entryList[dayIndex].value = 0
    }
  };

  createRange(num: number): number[] {
    var range: number[] = [];
    for (var i = 0; i < num; i++) {
      range.push(i);
    }
    return range;
  }
}
