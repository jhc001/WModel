(function(){
    window.Point = function Point(x,y){
        this.x =x;
        this.y =y;
    };
    /*获取元素坐标*/
    Element.prototype.getPoint = function (){
        return new window.Point(this.offsetLeft,this.offsetTop);
    };
    /*计算两元素的距离*/
    Element.prototype.dist = function (e){
        if(!e) throw 'the e is not be null';
        var p1 = this.getPoint();
        var p2 = e.getPoint();
        return new Point(p1.x-p2.x,p1.y-p2.y);
    };

    function God(env){
        if(this.constructor===God){
            if(env===null||env===undefined)throw "the  environment can't be null";
            this.env = env;
            this.init();
        }else{
            return new God(env);
        }
    };

    God.prototype = {
        constructor:God,
        d:10
    };

    God.prototype.initElement = function(obj){
        var p = this.randomPoint();
        
        $(obj).css({position:"absolute",
                    display:"inline-block",
                    width:this.d+"px",
                    height:this.d+"px",
                    background:"red"});
        obj.style.left = p.x+"px";
        obj.style.top = p.y+"px";
    };

   God.prototype.randomPoint = function(){
        var x = Math.random()*(this.env.offsetWidth-this.d);
        var y = Math.random()*(this.env.offsetHeight-this.d);
       
        var rx = parseInt(x)+this.env.offsetLeft;
        var ry = parseInt(y)+this.env.offsetTop;
        if(rx>300 || ry>300){
            console.log("fasdfsd");
        }
        return new Point(rx,ry);
   }

    God.prototype.init = function(){
        var divs = this.env.querySelectorAll("div");
        this.length=0;
        if(divs&&divs.length>0)
        for(var i=0;i<divs.length;i++){
            var e = divs[i];
            this[i]=e;
            this.length++;
            var info ={};
            e.info = info;
            this.initElement(e);
        }
     };

    window.God = God;

}())