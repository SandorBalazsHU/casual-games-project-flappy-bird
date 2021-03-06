class Entity {
    constructor(x, y) {
        this.x              = x;
        this.y              = y;
        this.images         = new Map();
        this.sounds         = new Set();
        //[key] =>
        this.events         = new EventSet();
        this.animationState = 0;
    }

    load(callBack) {
        for (let [name, magei] of this.images) {
            image.load(callBack(this));
        }
        for (let [name, sound] of this.sounds) {
            sound.load(callBack(this));
        }
        return this.images.size + this.sounds.size;
    }

    draw(game) {
        var sprite = this.images.get(spriteSheet);
        game.drawImage(sprite.image,
        sprite.stages.get(this.animation).x, sprite.stages.get(this.animation).y,
        sprite.stages.get(this.animation).w, sprite.stages.get(this.animation).h, 
        this.x, this.y, sprite.width, sprite.height);
    }
    move() {

    }
    callEvent(event) {

    }
    animate() {

    }
    hit() {

    }
    getImgX() {
    }
    getImgY() {
    }
    get width() {
        return this.images.get(spriteSheet).width;
    }
    get height() {
        return this.images.get(spriteSheet).height;
    }
}

export class diynamicEntity extends Entity{

}

export class staticEntity extends Entity {
    
}