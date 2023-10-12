import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.css']
})
export class AvatarCardComponent {
  @Input() selectedPeriod: string | null = null
  @Output() setActive: EventEmitter<string> = new EventEmitter()
}
