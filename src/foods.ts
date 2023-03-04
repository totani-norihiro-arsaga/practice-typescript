import { Food } from "./food";

export class Foods {
    elements = document.querySelectorAll<HTMLDivElement>('.food');
    private static instance: Foods;
    private constructor(){
        this.elements.forEach((element)=>{
            new Food(element)
        })
    }
    private _activeElements: HTMLDivElement[] = [];
    get activeElements(){
        this._activeElements = [];
        this.elements.forEach((element)=>{
            if(element.classList.contains('food--active')){
                this._activeElements.push(element);
            }
        })
        return this._activeElements;
    }
    private _activeElementsScore: number[] = [];
    get scoreList() {
        this._activeElementsScore = [];
        this.activeElements.forEach((activeElement)=> {
            const scoreElement = activeElement.querySelector('.food__score');
            if(scoreElement){
                this._activeElementsScore.push(Number(scoreElement.textContent));
                console.log(scoreElement);
            }
        })
        return this._activeElementsScore;
    }
    static getInstance() {
        if(!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }  
 }