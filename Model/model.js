import LinkedList from "./LinkedList.js"

class Ball {
    constructor(color, path) {
        this.color = color;
        this.path = path;
    }
    toString() {
        return this.color
    }
}
const balls = [
    new Ball("red", "red-ball.png"),
    new Ball("blue", "blue-ball.png"),
    new Ball("yellow", "yellow-ball.png"),
    new Ball("green", "green-ball.png"),
];
export default class Model {

    list;
    cannonBall;
    constructor() {
        this.list = new LinkedList()
    }
    getBallList(){
        return this.list
    }

    generateRandomBalls() {

        for (let i = 0; i < 5; i++) {
            this.list.addFirst(this.makeNewRandomBall())
        }
        //this.list.dumpList()
        return this.list
    }
    newCannonBall() {
        this.cannonBall = this.makeNewRandomBall()
        return this.cannonBall
    }

    makeNewRandomBall() {
        return balls[Math.floor(Math.random() * balls.length)];
    }
    insertNewBallAfter(index) {
        this.list.insertAfter(index, this.cannonBall)
        return this.list
    }
    checkListForMatches(index) {
        //check list for matches - 3 or more same color next to eachhother
        let newBall = this.list.get(index);
        let sameColorBallsIndexList = [index];

        //let ballToCheck = newBall;
        let currentIndex = index + 1;

        // Check balls to the right of the new ball //TODO fix hardcoded maxSize
        while (currentIndex < this.list.size() && newBall.color == this.list.get(currentIndex).color) {
            //let ball = this.list.get(currentIndex)
            sameColorBallsIndexList.push(currentIndex);
            currentIndex++;
        }

        currentIndex = index - 1;

        // Check balls to the left of the new ball
        while (currentIndex >= 0 && newBall.color == this.list.get(currentIndex).color) {
            //let ball = this.list.get(currentIndex)
            sameColorBallsIndexList.unshift(currentIndex);
            currentIndex--;
        }
        //console.log(sameColorBalls);
        if (sameColorBallsIndexList.length >= 3) {
            //send new list to controller
            return sameColorBallsIndexList
        }
    }
    removeBalls(ballIndexList) {
        //remove them from the list
        console.log("remove balls");
        //iterate over list and remove 1 ball at a time
        for (let i = 0; i < ballIndexList.length; i++) {
            console.log("should remove: " + ballIndexList[i]);
            this.list.removeIndex(ballIndexList[i])
            console.log("removed 1");

        }

    }


}