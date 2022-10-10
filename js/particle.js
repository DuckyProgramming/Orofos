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
        }
    }
    display(){
        if(this.sizing>0){
            this.layer.translate(this.position.x,this.position.y)
            this.layer.rotate(this.direction)
            this.layer.scale(this.size*this.sizing)
            switch(this.type){
                case 0: case 1: case 2:
                    this.layer.fill(this.color[0],this.color[1],this.color[2],this.fade)
                    this.layer.ellipse(0,0,1,1)
                break
            }
            this.layer.scale(1/this.size/this.sizing)
            this.layer.rotate(-this.direction)
            this.layer.translate(-this.position.x,-this.position.y)
        }
    }
    update(){
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
            break
            case 2:
                this.fade-=0.1*this.speed
                this.sizing+=0.1*this.speed
            break
        }
    }
}