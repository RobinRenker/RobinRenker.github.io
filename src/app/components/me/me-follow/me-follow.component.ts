import {Component} from '@angular/core';

@Component({
    selector: 'me-follow',
    templateUrl: './me-follow.component.html',
    styleUrls: ['./me-follow.component.scss']
})
export class MeFollowComponent {
    public links: LinkConfig[] = [
        new LinkConfig("https://github.com/RobinRenker","/assets/svg/github.svg","Github"),
        new LinkConfig("https://www.xing.com/profile/Robin_Renker","/assets/svg/Xing.svg","Xing"),
        new LinkConfig("https://www.linkedin.com/in/robinrenker","/assets/svg/linkedin.svg","LinkedIn")
    ];
}
export class LinkConfig {
    public link:string = "";
    public icon:string = "";
    public title:string = "";
    constructor(link:string,icon:string,title:string){
        this.link = link;
        this.icon = icon;
        this.title = title;
    }
}


