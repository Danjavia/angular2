import { Component } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'crm-app',
  templateUrl: 'crm.component.html',
  styleUrls: ['crm.component.css'],
  directives: [AlertComponent]
})

export class CrmAppComponent {
  title = 'crm works!';
}
