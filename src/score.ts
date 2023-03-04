import { Foods } from "./foods";

export class Score {
    private static instance: Score;
    private constructor() {
    } 
    showTotalScore() {
        const totalScore = this.totalScore;
        console.log(totalScore);
        document.querySelector('.score__number')!.textContent =String(totalScore);
    }
    get totalScore() {
        const foods = Foods.getInstance();
        const scoreList = foods.scoreList;
        console.log(scoreList);
        const score = scoreList.reduce((a: number, b: number)=>{
            return a + b;
        }, 0);
        return score;
    }
    static getInstance(){
        if(!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}