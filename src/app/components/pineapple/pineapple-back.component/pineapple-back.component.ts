import {OnInit, Component, ElementRef, HostListener} from '@angular/core';

@Component({
    selector: 'pineapple-back',
    templateUrl: './pineapple-back.component.html',
    styleUrls: ['./pineapple-back.component.scss']
})
export class PineappleBackComponent implements OnInit {

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (this.resizeTimeout != null) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(() => {
            this.redraw();
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = null;
        },400);
    }

    public row: PineApple[][] = [];
    private split: number = 200;
    private resizeTimeout: any = null;

    constructor(private elementRef: ElementRef){}

    ngOnInit(): void {
        this.redraw();
    }
    public redraw(): void {
        console.log("redraw");
        let row: PineApple[][] = new Array(Math.floor(this.elementRef.nativeElement.clientHeight / this.split));
        for(let i:number = 0; i < row.length; i++){
            let col: PineApple[] = [];
            for(let c:number = 0; c < Math.floor(this.elementRef.nativeElement.clientWidth / this.split); c++){
                col.push(new PineApple());
            }
            row[i] = col;
        }
        this.row = row;
    }
}
class PineApple {
    public rotation:number = 0;
    public offsetx:number = 0;
    public offsety:number = 0;
    public color:string = "";
    constructor() {
        let colors: string[] = ['t','p','y','r'];
        let maxoffset:number = 50; //px
        let maxrotation:number = 60; //deg
        this.offsetx = Math.round(Math.random() * (maxoffset*2)) - maxoffset;
        this.offsety = Math.round(Math.random() * (maxoffset*2)) - maxoffset;
        this.rotation = Math.round(Math.random() * (maxrotation*2)) - maxrotation;
        this.color = colors[Math.round(Math.random() * (colors.length - 1))];
    }
}


