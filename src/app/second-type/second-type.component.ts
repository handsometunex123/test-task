import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-type',
  templateUrl: './second-type.component.html',
  styleUrls: ['./second-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondTypeComponent implements OnInit {

  @Input() price;
  @Input() title;
  
  constructor() { }

  public ngOnInit(): void {
  }

}
