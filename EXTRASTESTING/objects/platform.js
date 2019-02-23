class Platform {
    constructor(lvl, x, y, type, upside) {
        this.lvl = lvl
        this.x = x
        this.y = y
        this.type = type
        if (this.type == 6) {
            this.w = 50
            this.h = 100
        } else {
            this.w = 50
            this.h = 50
        }
        if (this.type == 1 || this.type == 2) {
            this.rand = Math.floor(Math.random() * 3) + 1
        }
        this.upside = upside
        this.velocity = 1
        this.currFrame = 0
        this.count = 0
        this.groundHeight = canvas.height / 2
        this.spriteSheet = {
            frameSize: {
                x: 49,
                y: 64
            }
        }
        this.currAnimation = "idleRight"
    }
    draw() {
        /*if (this.type == 3) {
            context.fillStyle = "red"
        }
        else {
            context.fillStyle = "black"
        }*/

        //plataforms upside
        if (this.type == 1 && this.upside) {

            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.upside.type.one.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.upside.type.one.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.upside.type.one.variantThree, this.x, this.y, this.w, this.h)
                    break
            }

        } else if (this.type == 2 && this.upside) {
            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.upside.type.two.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.upside.type.two.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.upside.type.two.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        }

        //plataforms downside
        if (this.type == 1 && !this.upside) {

            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.downside.type.one.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.downside.type.one.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.downside.type.one.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        } else if (this.type == 2 && !this.upside) {
            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.downside.type.two.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.downside.type.two.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.downside.type.two.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        }
        //Monsters down
        if (this.type == 3 && !this.upside) {

            context.drawImage(images.enemies.downside.three.downsidehazardspike, this.x, this.y, this.w, this.h)

        } else if (this.type == 7 && !this.upside) {
            context.drawImage(images.enemies.downside.three.downsidehazardspikeTwo, this.x, this.y, this.w, this.h)
        } else if (this.type == 5 && !this.upside) {
            context.drawImage(images.enemies.downside.five.downsidehazardflyer, 0 + this.currFrame, 0, this.w, this.h, this.x, this.y, this.w, this.h);
        }

        //Monsters upside
        if (this.type == 3 && this.upside) {

            context.drawImage(images.enemies.upside.three.upsidehazardspike, this.x, this.y, this.w, this.h)

        } else if (this.type == 7 && this.upside) {
            context.drawImage(images.enemies.upside.three.upsidehazardspikeTwo, this.x, this.y, this.w, this.h)
        } else if (this.type == 5 && this.upside) {


            context.drawImage(images.enemies.upside.five.upsidehazardflyer, 0 + this.currFrame, 0, this.w, this.h, this.x, this.y, this.w, this.h);

            if (this.count >= 10) {
                this.currFrame += 50
                this.count = 0
            }


            if (this.currFrame > 100) {
                this.currFrame = 0
            }
            this.count += 1
        }

        //CheckPoint Upside
        if (this.type == 6 && this.upside) {
            context.drawImage(images.tiles.upside.checkPoint.upsidecheckpointOne, this.x, this.y, this.w, this.h)
        }
        //CheckPoint Downside
        if (this.type == 6 && !this.upside) {
            context.drawImage(images.tiles.downside.checkPoint.downsidecheckpointOne, this.x, this.y, this.w, this.h)
        }
        //Bridge
        if (this.type == 4 && !this.upside) {
            context.drawImage(images.tiles.downside.bridge.downsidebridge, this.x, this.y, this.w, this.h)
        }

    }

}