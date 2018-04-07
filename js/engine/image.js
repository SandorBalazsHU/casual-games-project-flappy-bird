class image {
    constructor(src,width,height) {
        this.src    = src;
        this.height = width;
        this.width  = height;
        this.image = null;
    }
    load(callBack){
        this.image = document.createElement('img');
        this.image = callBack;
        this.image = this.src;
    }
    draw(context, x, y, width, height) {
        game.drawImage(this.images.get(spriteSheet),
        spriteSheet[this.animation]["x"], spriteSheet[this.animation]["y"],
        spriteSheet[this.animation]["w"], spriteSheet[this.animation]["h"], 
        this.x, this.y, 90, 124);
    }
}

class spriteSheet extends image {
    constructor(src, width, height) {
        super(src, width, height);
    }
}