"use strict";
class Game {
    constructor(background, foreground, eventListener = new EventListener(), collisionHandler = new Collision()) {
        this.background             = document.getElementById(background);
        this.backgroundContext      = background.getContext('2d');
        this.foreground             = document.getElementById(foreground);
        this.foregroundContext      = foreground.getContext('2d');
        this.staticEntitys          = new Set();
        this.diynamicEntitys        = new Set();
        this.keyListener            = new Map();
        this.mouseListener          = new Map();
        this.costumEventListener    = new Map();
        this.eventListener          = eventListener;
        this.collisionHandler       = collisionHandler;
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
                this.diynamicEntitys.add(entity);
            }else{
                this.staticEntitys.add(entity);
            }
            if(typeof Entity.event === 'function')
            {
                if(entity.events.get("key"))   this.keyListener.set(entity, entity.events.get("key"));
                if(entity.events.get("mouse")) this.mouseListener.set(entity, entity.events.get("mouse"));
                if(entity.events.get("event")) this.costumEventListener.set(entity, entity.events.get("event"));
            }
            if(typeof Entity.hit === 'function') collisionHandler.addEntity(entity);
        }else{
            new Error(typeof entity + " type is not Entity");
        }
    }

    removeEntity(entity) {
        if(entity instanceof Entity){
            if(typeof Entity.move === 'function')
            {
                this.diynamicEntitys.delete(entity);
            }else{
                this.staticEntitys.delete(entity);
            }
            if(typeof Entity.event === 'function')
            {
                this.keyListener.delete(entity);
                this.mouseListener.delete(entity);
                this.costumEventListener.delete(entity);
            }
            if(typeof Entity.hit === 'function') collisionHandler.removeEntity(entity);
        }else{
            new Error(typeof entity + " type is not Entity");
        }
    }
}

class EventListener {
    constructor() {

    }
}

class Collision {
    constructor() {

    }
}

class Entity {
    constructor(x, y) {
        this.x      = x;
        this.y      = y;
        this.images = new Set();
        this.sounds = new Set();
        this.events = new Map();
        this.anima
    }
    move() {

    }
    event(event) {

    }
    animate() {

    }
    hit() {

    }
}

class diynamicEntity {

}