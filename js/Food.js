class Food{
    constructor(){
        this.foodStock;
        this.lastFed = 0;
        this.image = loadImage("images/Milk.png");
        this.array=[];
        this.num;
        
    }

    getFoodStock(){
        
        this.foodStock=foodS;
        
    }
    updateFoodStock(data){
        
    }
    deductFood(){

    }

    display(){
        var x=80, y=100
            if(this.foodStock!==0){
                for(var i=0; i<this.foodStock; i++){
                    if(i%10===0){
                        x=80;
                        y=y+120
                    }
                    image(this.image, x, y, 120, 100);
                    x=x+50
                }
                
        }
    }
    washroom(){
        bg = washroom;
    }
    garden(){
        bg = garden;
    }
    bedroom(){
        bg = bedroom;
    }
}
