import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  countDown: Subscription;
  // 10 minutes counter
  counter = 600;
  tick = 1000;
  offerEnd: boolean = false;
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => {
      if (this.counter !== 0) {
        --this.counter;
      } else {
        this.offerEnd = true;
      }
    });
  }
  ngOnDestroy() {
    this.countDown = null;
  }
}

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
