import {Component} from '@angular/core';
import {NavigationService} from '../../../providers/navigation.service';

@Component({
    selector: 'navigation-switch',
    templateUrl: './navigation-switch.component.html',
    styleUrls: ['./navigation-switch.component.scss']
})
export class NavigationSwitchComponent {
    constructor(public navigationService: NavigationService){}
}

