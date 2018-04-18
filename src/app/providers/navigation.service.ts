import { Injectable } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';

@Injectable()
export class NavigationService {

    private navigationExpanded: boolean = false;
    public navigationIndex: number = 0;
    public configs: NavigationConfig[] = [
        new NavigationConfig("Me","/me"),
        new NavigationConfig("Development","/dev"),
        new NavigationConfig("Development","/dev"),
        new NavigationConfig("Development","/dev")
    ];

    constructor(public router: Router) {
       router.events.subscribe((event:Event) => {
            if(event instanceof NavigationStart && event.url != this.configs[this.navigationIndex].route) {
                for(var i = 0; i < this.configs.length; i++){
                    if(event.url == this.configs[i].route){
                        this.navigationIndex = i;
                    }
                }
            }
        });
    }
    public setIndex(i:number):void{
        this.navigationIndex = i;
        this.navigationExpanded = false;
        this.router.navigateByUrl(this.getConfig().route);
    }
    public getState(): boolean{
        return this.navigationExpanded;
    }
    public changeState(): void {
        this.navigationExpanded = !this.navigationExpanded;
    }
    public getConfig(): NavigationConfig{
        return this.configs[this.navigationIndex];
    }
}
class NavigationConfig {
    title:string = "";
    route:string = "";
    constructor(title:string,route:string){
        this.title = title;
        this.route = route;
    }
}