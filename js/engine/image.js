class Image {
    constructor(name, src, width, height) {
        this.name   = name;
        this.src    = src;
        this.height = width;
        this.width  = height;
        this.image  = null;
    }

    load(callBack) {
        this.image = document.createElement('img');
        this.image = callBack;
        this.image = this.src;
    }
}

class spriteSheet extends image {
    constructor(src, width, height) {
        super(name, src, width, height);
        this.stages = new Map();
    }
    addStage(index = -1, x, y, diagonalX, diagonalY) {
        var animationIndex = index == -1 ? this.stages.size+1 : index;
        this.stages.set(animationIndex, {x : x, y : y, w : diagonalX-x, h : diagonalY-y});
    }
}