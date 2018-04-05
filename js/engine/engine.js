"use strict";
class Game {
    constructor(background, foreground, eventListener = new eventListener()) {
        this.background             = document.getElementById(background);
        this.backgroundContext      = background.getContext('2d');
        this.foreground             = document.getElementById(foreground);
        this.foregroundContext      = foreground.getContext('2d');
        this.staticEntitys          = new Set();
        this.diynamicEntitys        = new Set();
        this.keyListener            = new Set();
        this.mouseListener          = new Set();
        this.costumEventListener    = new Set();
        this.eventListener          = eventListener;
    }
    start() {
        this.loader();
        this.render(static);
        this.render();
    }
    loader() {
    }
    staticRender() {
    }
    render(static = dynamic) {
    }
    addEntity(entity) {
        if(entity instanceof Entity){
            if(typeof Entity.move === 'function')
            {
                diynamicEntitys.add(entity);
            }else{
                staticEntitys.add(entity);
            }
            for (let item of mySet);
        }else{
            new Error(typeof entity + " type is not Entity");
        }
    }
}

class eventListener {
    constructor()
}

class Entity {
    constructor(x, y) {
        this.x      = x;
        this.y      = y;
        this.images = new Set();
        this.sounds = new Set();
        //["EventType", eventID]
        this.events = new Set();
    }
    move (){

    }
    event (event){

    }
    animate () {

    }
}