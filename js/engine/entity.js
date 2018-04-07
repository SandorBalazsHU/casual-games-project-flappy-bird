class Entity {
    constructor(x, y) {
        this.x              = x;
        this.y              = y;
        this.images         = new Map();
        this.sounds         = new Set();
        this.events         = new Map();
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
    event(event) {

    }
    animate() {

    }
    hit() {

    }
    getImgX() {
    }
    getImgY() {
    }
    getWidth() {
    }
    getHeight() {
    }
}

class diynamicEntity {

}

class AnimatedEventDrivenDynamicEntity {
    
}