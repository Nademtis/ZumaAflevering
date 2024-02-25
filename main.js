"use strict"

import Controller from "./Controller/controller.js"

window.addEventListener("load", start);
window.updateView = updateView


const controller = new Controller()

function start() {
    //controller.testConnection()
    controller.initiateGame()

}
function updateView(){
    controller.updateView()
}
