import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-type',
  templateUrl: './first-type.component.html',
  styleUrls: ['./first-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstTypeComponent implements OnInit {

  @Input() price;
  @Input() title;
  constructor() { }

  public ngOnInit(): void {
  }

}
