(function(){
    function Jhc(sele){
        if(this.constructor===Jhc){
            this.target =[];
            this.select(sele);
            this.length=0;
        }else{
            return new Jhc(sele);
        }
    }

    Jhc.prototype={
        constructor:Jhc,
        select:function(stor){
            var t = document.querySelectorAll(stor);
            for(i in t) {
                this[i] = t[i];
                this.length++;
            }
            
        }
    }
    window.$ = window.Jhc = Jhc;
}())