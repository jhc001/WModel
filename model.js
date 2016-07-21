(function(){
    window.Point = function Point(x,y){
        this.x =x;
        this.y =y;
    }

    Element.prototype.getPoint = function (){
        return new window.Point(this.offsetLeft,this.offsetTop);
        
    }

    function God(env){
        if(this.constructor===God){
            if(env===null||env.nodeName!='DIV')throw "the  environment must be a  div";
            this.env = env;
            this.init();
        }else{
            return new God();
        }
    }

    God.prototype = {
        constructor:God,
        init:function(){
            var divs = this.env.querySelectorAll("div");
            this.length=0;
            for(i in divs){
                this[i]=divs[i];
                this.length++;
            }
        }
    }



    

}())