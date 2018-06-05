import {Component} from '@angular/core';

@Component({
    selector: 'pineapple',
    templateUrl: './pineapple.component.html',
    styleUrls: ['./pineapple.component.scss']
})
export class PineappleComponent {
    public contents: PineAppleContent[] = [
        new PineAppleContent('Ein Text ist ein Text', '/assets/images/sunset.jpg'),
        new PineAppleContent('Ein Text ist ein Text', '/assets/images/sunset.jpg'),
        new PineAppleContent('Ein Text ist ein Text', '/assets/images/sunset.jpg'),
    ];
}

export class PineAppleContent {
    public text: string = "";
    public img: string = "";
    constructor(text:string, img:string) {
        this.text = text;
        this.img = img;
    }
}

