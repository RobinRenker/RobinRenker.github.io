import {Component, Input} from '@angular/core';

@Component({
    selector: 'tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent {
    @Input() rev: boolean = false;
}
