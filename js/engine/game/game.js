"use strict";

export class Game {
    constructor( gameDiv ) {
        this.canvases = new Map();
        this.canvases = new Map();
        this.gameDiv = gameDiv;
        if(typeof(this.gameDiv) == "string") {
            if(document.getElementById(gameDiv) == null) {
                new Error("The game div doesn't exist");
            }else{
                document.getElementById(gameDiv);
            }
        }
        this.layers = 0;
        this.layerRoof = 0;
        this.eventHandler = new EventHandler( this );
        this.collisionHandler = new CollisionHandler( this );
        this.fileLoader = new FileLoader( this );
        this.render = new Render( this );
    }

    addCanvas( canvas ) {
        if(entity instanceof Entity) {
            if(entity instanceof StaticEntity) this.staticEntitys.add(entity);
            if(entity instanceof DinamicEntity) this.diynamicEntitys.add(entity);
            if(typeof entity.callEvent === 'function') this.eventHandler.addEntity(entity);
            if(typeof entity.hit === 'function') this.collisionHandler.addEntity(entity);
        }else{
            new Error(typeof entity + " type is not Entity");
        }
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

    _setSemafor() {
        this.gameDiv.classList.add("semafor");
    }

    _getSemafor() {
        return (this.gameDiv.getAttribute("class") == "semafor");
    }

    _clearSemafor() {
        this.gameDiv.classList.remove("semafor");
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