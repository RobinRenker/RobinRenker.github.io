import {Component, Input} from '@angular/core';

@Component({
    selector: 'me-panel',
    templateUrl: './me-panel.component.html',
    styleUrls: ['./me-panel.component.scss']
})
export class MePanelComponent {
    @Input() image:String = "";
    @Input() title:String = "";
    @Input() rev:Boolean = false;
}



