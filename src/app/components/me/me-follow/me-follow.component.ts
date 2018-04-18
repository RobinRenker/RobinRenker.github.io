import {Component} from '@angular/core';
import {publicpath} from '../../../config/conf';

@Component({
    selector: 'me-follow',
    templateUrl: './me-follow.component.html',
    styleUrls: ['./me-follow.component.scss']
})
export class MeFollowComponent {
    public p: String = publicpath + "/assets/svg/";
    public links: LinkConfig[] = [
        new LinkConfig("https://github.com/RobinRenker","github.svg","Github"),
        new LinkConfig("https://www.xing.com/profile/Robin_Renker","xing.svg","Xing"),
        new LinkConfig("https://www.linkedin.com/in/robinrenker","linkedin.svg","LinkedIn")
    ];
    constructor(){
        setInterval(() => {
            console.log(this.p);
        },2000)
    }
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


