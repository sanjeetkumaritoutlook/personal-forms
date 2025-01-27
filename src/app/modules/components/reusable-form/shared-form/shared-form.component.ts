import { Component, OnInit,Input  } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.css']
})
export class SharedFormComponent implements OnInit {
  @Input() parentGroup: FormGroup;
  @Input() header: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
