"use strict";

import { Entity }       from "./entity.js";
import { Image }        from "./image.js";
import { SpriteSheet }  from "./image.js";
import { Sound }        from "./sound.js";

export class Game {
    constructor(background, foreground) {
        //Statikus elemek
        this.background             = document.getElementById(background);
        this.backgroundContext      = background.getContext('2d');
        this.staticEntitys          = new Set();
        //Dinamikus elemek
        this.foreground             = document.getElementById(foreground);
        this.foregroundContext      = foreground.getContext('2d');
        this.diynamicEntitys        = new Set();
        //Kezelők
        this.eventHandler           = new EventHandler(this);
        this.collisionHandler       = new CollisionHandler(this);
        this.fileLoader             = new FileLoader(this);
        //Render
        this.renderLoop             = null;
        this.fps                    = Math.floor(1000/60);
    }

    start() {
        this.fileLoader.load(this);
        if(!this.getSemafor()) {
            this.setSemafor();
            this.render();
        }else{
            new Error("An another engine instance alredy use this canvas!");
        }
    }

    stop() {
        clearInterval(this.renderLoop);
        this.clearSemafor();
    }

    render() {
        for(let entity of game.staticEntitys) if(entity.status == "online") entity.draw(this);
        this.renderLoop = setInterval(function() {
            this.eventHandler.update();
            this.collisionHandler.update();
            for(let entity of game.diynamicEntitys) if(entity.status == "online") entity.draw(this);
        }, this.fps);
    }

    setSemafor() {
        this.background.classList.add("semafor");
        this.foreground.classList.add("semafor");
    }

    getSemafor() {
        return ((this.background.getAttribute("class") == "semafor") || (this.foreground.getAttribute("class") == "semafor"));
    }

    clearSemafor() {
        this.background.classList.remove("semafor");
        this.background.classList.remove("semafor");
    }

    addEntity(entity) {
        if(entity instanceof Entity) {
            if(entity instanceof StaticEntity) this.staticEntitys.add(entity);
            if(entity instanceof DinamicEntity) this.diynamicEntitys.add(entity);
            if(typeof entity.callEvent === 'function') this.eventHandler.addEntity(entity);
            if(typeof entity.hit === 'function') this.collisionHandler.addEntity(entity);
        }else{
            new Error(typeof entity + " type is not Entity");
        }
    }

    removeEntity(entity) {
        if(entity instanceof Entity) {
            if(entity instanceof StaticEntity) this.staticEntitys.delete(entity);
            if(entity instanceof DinamicEntity) this.diynamicEntitys.delete(entity);
            if(typeof entity.event === 'function') this.eventHandler.removeEntity(entity);
            if(typeof Entity.hit === 'function') this.collisionHandler.removeEntity(entity);
        }else{
            new Error(typeof entity + " type is not Entity");
        }
    }
}

class CollisionHandler {
    constructor(game) {
        this.game = game;
    }
    addEntity(entity) {
    }
    removeEntity(entity) {
    }
}

class FileLoader {
    constructor(game) {
        this.game = game;
        this.callBackRegister = new Map();
        this.checkLoadInterval = 35;
        this.vaitingElements = 0;
        this.allElements = 0;
    }

    load() {
        for(let entity of game.staticEntitys) {
            this.callBackRegister.set(entity, entity.load(this.callback));
        }

        for(let entity of game.diynamicEntitys) {
            this.callBackRegister.set(entity, entity.load(this.callback));
        }

        var firstCount = true;
        var checkLoad = setInterval(function(){
            for (let [entity, i] of this.callBackRegister) this.vaitingElements += i;

            if(firstCount) {
                this.allElements = this.vaitingElements;
                firstCount = false;
            }

            var progressInPercent = ((this.allElements - this.vaitingElements) / this.allElements) * 100;
            game.eventListener.callEvent("LoadInProgress", progressInPercent);

            if(this.vaitingElements == 0) {
                game.eventListener.callEvent("LoadFinished");
                clearInterval(checkLoad);
            }
        }, checkLoadInterval);
    }

    callback(entity) {
        this.callBackRegister.set(entity, this.callBackRegister.get(entity)-1); 
    }
}