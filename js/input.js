$(function(){
    'use strict'

    window.Input = function(selector){
        var $ele,
        me = this,
        rule = 
        {
            required: true,
        };


        this.load_validator = function(){
            var val = this.get_val();
            this.validator = new Validator(val,rule);
        }

        this.get_val = function(){
            return $ele.val();
        }


        function init(){
            find_ele();
            parse_rule();
            me.load_validator();
            listen();
        }

        function listen() {
            $ele.on('blur',function(){
                var valid = me.validator.is_valid(me.get_val());
                if(valid){
                    $('#'+$ele.attr('name')+'-input-error').hide();
                }else{
                    $('#'+$ele.attr('name')+'-input-error').show();
                }
            })
        }

        init();

//寻找待输入的元素

        function find_ele() {
            if (selector instanceof jQuery) {
                $ele = selector;
            } else {
                $ele = $(selector);
            }
        }

        function parse_rule() {
            var rule_str = $ele.data('rule');
            if(!rule_str)return;
            var rule_arr = rule_str.split('|');
            for (let i = 0; i < rule_arr.length; i++) {
                var item_str = rule_arr[i];
                var item_arr = item_str.split(':');
                rule[item_arr[0]] = JSON.parse(item_arr[1]);
                
            }

        }





    }
})