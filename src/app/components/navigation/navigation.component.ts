import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {NavigationService} from '../../providers/navigation.service';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    constructor(private navigationService: NavigationService, private router: Router) {}

}


