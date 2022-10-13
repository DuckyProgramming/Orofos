class particle{
    constructor(layer,x,y,type,direction,size,speed,color){
        this.layer=layer
        this.position={x:x,y:y}
        this.type=type
        this.direction=direction
        this.size=size
        this.speed=speed
        this.color=color
        this.remove=false
        this.time=0
        switch(this.type){
            case 0:
                this.sizing=0
                this.fade=0
                this.trigger=false
            break
            case 1: case 2:
                this.sizing=0
                this.fade=1
            break
            case 3: case 4: case 5:
                this.sizing=1
                this.fade=0
                this.end=0
            break
            case 6:
                this.sizing=1
                this.fade=0
                this.trigger=false
            break
        }
    }
    display(){
        if(this.sizing>0){
            this.layer.translate(this.position.x,this.position.y)
            this.layer.rotate(this.direction)
            this.layer.scale(this.size*this.sizing)
            this.layer.noStroke()
            switch(this.type){
                case 0: case 1: case 2:
                    this.layer.fill(this.color[0],this.color[1],this.color[2],this.fade)
                    this.layer.ellipse(0,0,1,1)
                break
                case 3:
                    this.layer.stroke(this.color[0],this.color[1],this.color[2],this.fade)
                    this.layer.strokeWeight(1)
                    this.layer.line(0,-3,0,3)
                break
                case 4:
                    this.layer.stroke(this.color[0],this.color[1],this.color[2],this.fade)
                    this.layer.strokeWeight(1)
                    this.layer.line(0,-5,0,5)
                break
                case 5:
                    this.layer.stroke(this.color[0],this.color[1],this.color[2],this.fade)
                    this.layer.strokeWeight(1)
                    this.layer.line(0,-7,0,7)
                break
                case 6:
                    this.layer.fill(this.color[0],this.color[1],this.color[2],this.fade)
                    this.layer.textSize(10)
                    this.layer.text('Miss',0,0)
                break
            }
            this.layer.scale(1/this.size/this.sizing)
            this.layer.rotate(-this.direction)
            this.layer.translate(-this.position.x,-this.position.y)
        }
    }
    update(){
        this.time++
        switch(this.type){
            case 0:
                this.position.x+=sin(this.direction)*this.speed*5
                this.position.y-=cos(this.direction)*this.speed*5
                if(this.trigger){
                    this.fade-=0.1*this.speed
                    this.sizing-=0.1*this.speed
                    if(this.fade<0){
                        this.remove=true
                    }
                }else{
                    this.fade+=0.1*this.speed
                    this.sizing+=0.1*this.speed
                    if(this.fade>1){
                        this.trigger=true
                    }
                }
            break
            case 1:
                this.position.x+=sin(this.direction)*this.speed*8
                this.position.y-=cos(this.direction)*this.speed*8
                this.fade-=0.1*this.speed
                this.sizing+=0.1*this.speed
                if(this.fade<0){
                    this.remove=true
                }
            break
            case 2:
                this.fade-=0.1*this.speed
                this.sizing+=0.1*this.speed
                if(this.fade<0){
                    this.remove=true
                }
            break
            case 3: case 4: case 5:
                this.position.x+=sin(this.direction)*this.speed
                this.position.y-=cos(this.direction)*this.speed
                if(this.time==this.end){
                    entities.particles.push(new particle(this.layer,this.position.x,this.position.y,1,this.direction,this.size*this.speed,this.speed/10,this.color))
                }
                if(this.time>=this.end){
                    this.fade-=1/5
                    if(this.fade<=0){
                        this.remove=true
                    }
                }else if(this.fade<1){
                    this.fade+=1/5
                }
            break
            case 6:
                this.position.x+=sin(this.direction)*this.speed*8
                this.position.y-=cos(this.direction)*this.speed*8
                if(this.trigger){
                    this.fade-=0.1*this.speed
                    if(this.fade<0){
                        this.remove=true
                    }
                }else{
                    this.fade+=0.1*this.speed
                    if(this.fade>1){
                        this.trigger=true
                    }
                }
            break
        }
    }
}