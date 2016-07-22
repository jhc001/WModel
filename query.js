(function(){
    function Jhc(sele){
        if(this.constructor===Jhc){
            this.target =[];
            this.length=0;
            this.select(sele);
        }else{
            return new Jhc(sele);
        }
    }

    Jhc.prototype={
        constructor:Jhc,
        select:function(stor){
            if(!stor) return ;
            if(typeof stor==='string' && stor[0]==='#'){
                this[0] = document.getElementById(stor.substr(1));
                this.length=1;
            }else if(typeof stor==='string'){
                var t = document.querySelectorAll(stor);
                for(i=0;i<t.length;i++) {
                    this[i] = t[i];
                    this.length++;
                }
            }else if(stor.nodeType===1){
                this[0] = stor;
                this.length=1;
            }
        }
    }

    Jhc.prototype.attr = function(aname,val){
        if(!aname) throw "the attrbute name is not be null";
        if(this.length<1)return ;
        if(val===undefined){
            return this[0].getAttribute(aname);
        }else{
            var s = "";
           for(var i=0;i<this.length;i++){
               this[i].setAttribute(aname,val);
               var val = this[i].getAttribute(aname);
               if(val){
                s+=val;
               }
           }
           return s;
        }
    }

    Jhc.prototype.first = function(){
        return new Jhc(this[0]);
    }

    Jhc.prototype.text = function(tx){
        var resu;
        if(this.length>0){
            resu = this[0].innerText;
        }else{
            return null;
        }
        if(!(tx===undefined)){
            for(var i=0;i<this.length;i++){
                this[i].innerText = tx;
            }
        }
        return resu;
        
    }

    Jhc.prototype.html = function(ht){
        var resu;
        if(this.length>0){
            resu = this[0].innerHTML;
        }else{
            return null;
        }
        if(!(ht===undefined)){
            for(var i=0;i<this.length;i++){
                this[i].innerHTML = ht;
            }
        }
        return resu;
        
    }

    Jhc.prototype.val = function(v){
        var old;
        if(this.length>0){
            old = this[0].value;
        }else{
            return null;
        }
        if(!(v===undefined)){
            for(var i=0;i<this.length;i++){
                this[i].value = v;
            }
        }
        return old;
    }
/*
    background:red
    background
    {background:red,color:red}
*/
    Jhc.prototype.css = function(aname,val){
        if(this.length<1)return null;
        var resu;
        if(typeof aname==='object'){
            for(var i=0;i<this.length;i++){
                for(k in aname){
                    this[i].style[k] = aname[k];
                }
            }
        }else if(typeof aname==='string'){
            if(!(val===undefined)){
                for(var i=0;i<this.length;i++){
                    this[i].style[aname]=val;
                }
            }
            resu = this[0].style[aname];
        }else{
            throw "the function css arguments type must be a string or object";
        }
        return resu;
    }
    window.$ = window.Jhc = Jhc;
}())