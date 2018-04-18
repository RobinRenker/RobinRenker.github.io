import {Component, Input} from '@angular/core';
import {publicpath} from '../../../config/conf';

@Component({
    selector: 'me-panel',
    templateUrl: './me-panel.component.html',
    styleUrls: ['./me-panel.component.scss']
})
export class MePanelComponent {
    public p:string = publicpath+'/assets/svg/';
    @Input() image:String = "";
    @Input() title:String = "";
    @Input() rev:Boolean = false;
}



