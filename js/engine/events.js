class Event {
    constructor() {
    }
}

class EventSet {
    constructor() {

    }
}

class EventHandler {
    constructor(game) {
        this.game                = game;
        this.keyListener         = new Map();
        this.mouseListener       = new Map();
        this.costumEventListener = new Map();
    }
    update() {

    }
    callEvent(event, value = null) {
    }
    addEntity(entity) {
        if(typeof entity.callEvent === 'function') {

            if(entity.events.get("key") != undefined) {
                for(let keyCode of entity.events.get("key")) {
                    if(this.keyListener.get(keyCode) != undefined) {
                        this.keyListener.get(keyCode).add(entity);
                    }else{
                        this.keyListener.set(keyCode, new Set(entity))
                    }
                }
            }

            if(entity.events.get("mouse")) this.mouseListener.set(entity, entity.events.get("mouse"));
            if(entity.events.get("event")) this.costumEventListener.set(entity, entity.events.get("event"));
        }
    }
    removeEntity(entity) {
    }
}