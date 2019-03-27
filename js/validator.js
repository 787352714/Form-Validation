$(function(){
    'use strict';

    window.Validator = function (val,rule) {
           
        this.is_valid = function(new_val){
            var key;
            if(new_val !==undefined)
            val = new_val;

            if(!rule.required && !val)
            return true;

            for(key in rule){

                if(key === "required")
                 continue;

                let r = this['validate_' + key]();
                if(!r) return false;
            }  
            return true; 

        }

       this.validate_maxlength = function(){
           val = val.toString();
           return val.length <= rule.maxlength;
       }

       this.validate_max = function(){
           val = parseInt(val);
           return val <=rule.max;
       }

       this.validate_min = function(){
        val = parseInt(val);
        return val >=rule.min;
    }

        this.validate_minlength = function(){
            val = val.toString();
            return val.length >= rule.minlength;
        }

        this.validate_numeric = function(){
            return $.isNumeric(val);
        }

        this.validate_required = function(){
            var real = $.trim(val);
            if(!real  && real !== 0)
               return false;
            return true;
        }

        this.validate_pattern = function(){
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }
    }
})