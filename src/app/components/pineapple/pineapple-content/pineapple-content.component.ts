import {Component, Input} from '@angular/core';

@Component({
    selector: 'pineapple-content',
    templateUrl: './pineapple-content.component.html',
    styleUrls: ['./pineapple-content.component.scss']
})
export class PineappleContentComponent {

    @Input() text: string = "";
    @Input() img: string = "";
}


