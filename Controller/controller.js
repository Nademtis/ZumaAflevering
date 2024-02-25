"use strict";

import Model from "../Model/model.js";
import View from "../View/view.js";



export default class Controller {

  model;
  view;

  constructor() {
    this.model = new Model();
    this.view = new View(this);
  }

  initiateGame() {
    let ballList = this.model.generateRandomBalls()
    let cannonBall = this.model.newCannonBall()

    this.view.displayCannonBall(cannonBall)
    this.view.showBallList(ballList)
  }

  updateView() {
    let ballList = this.model.getBallList()
    let cannonBall = this.model.newCannonBall()
    this.view.displayCannonBall(cannonBall)
    console.log("UPDATE VIEW");
    this.view.showBallList(ballList)
  }

  insertNewBallAfter(index) {
    //update ballList & create new cannonBall
    let ballList = this.model.insertNewBallAfter(index)
    let cannonball = this.model.newCannonBall()
    
    this.updateView() // should be cannon animation

    //check if there is matches after new ball - index++ because that is the new ball index
    let ballIndexToRemoveList = this.model.checkListForMatches(index + 1)
    if (ballIndexToRemoveList != null) {
      //console.log("controller should inform view of start removal animation");
      //console.log(ballIndexToRemoveList);
      this.view.removeBalls(ballIndexToRemoveList)
      this.model.removeBalls(ballIndexToRemoveList)
    } else {

      //update view with new stuff from above
      //this.updateView()
      //this.view.displayCannonBall(cannonball)
    }

    


  }




}


/*
function dump() {
  let node = head;
  let output = "";
  while (node != null) {
    output += '"' + node.data + '"';
    output += " -> ";

    node = node.next;
  }
  output += "null";
  console.log(output);
}

function randomBall() {
  const balls = ["🔴", "🔵", "🟡", "🟢"]
  return balls[Math.floor(Math.random() * balls.length)];
}

function add(data) {
  const node = { data: data, next: null, prev: tail };
  if (head == null) {
    // this is the first (and only) node
    head = node;
    tail = node;
  } else {
    tail.next = node;
    tail = node;
  }
  return node;
}

function get(index) {
  let node = head;
  while (index > 0) {
    node = node.next;
    index--;
  }
  return node;
}

function insertBeforeNode(data, existingNode) {
  const newNode = { data: data, next: existingNode, prev: existingNode.prev };
  // TODO: Doesn't handle if this is the first node
  existingNode.prev.next = newNode;
  existingNode.prev = newNode;

  return newNode;
}

function insertAfterNode(data, existingNode) {
  const newNode = { data: data, next: existingNode.next, prev: existingNode };
  // TODO: Doesn't handle if this is the last node
  existingNode.next.prev = newNode;
  existingNode.next = newNode;

  return newNode;
}

function removeNode(existingNode) {
  const prev = existingNode.prev;
  const next = existingNode.next;

  if (prev == null) {
    // this is the first node - make head point to the next one
    head = existingNode.next;
    // and make this one point back to nothing
    if (head)
      head.prev = null;
  }

  if (next == null) {
    // this is the last node - make tail point to the one before
    tail = existingNode.prev;
    if (tail)
      tail.next = null;
  }

  if (existingNode.prev)
    existingNode.prev.next = existingNode.next;
  if (existingNode.next)
    existingNode.next.prev = existingNode.prev;
}
function findmatchesAround(node) {
  //go left as long as color == node.color
  //go right as long as color == node.color
  let before = node;
  while (before.data != null && before.data == node.data){
    console.log("this ball is: " + before.data);
    before = before.prev
  }
  

  //while (before != null && before.data == node.data) {
  //  before = before.prev
  //}
  
  
}*/