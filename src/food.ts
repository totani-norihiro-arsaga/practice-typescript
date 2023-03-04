import { Score } from "./score";

export class Food { 
    constructor(public element: HTMLDivElement){
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }

    clickEventHandler(){
        this.element.classList.toggle('food--active');
        console.log('発火');
        const score = Score.getInstance();
        score.showTotalScore();
    }
}