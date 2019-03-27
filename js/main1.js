 $(function(){
    'use strict';

    // var validator = new Validator("fA",{
    //     maxLength:10,
    //     minLength:2,
    //     pattern:/^[a-zA-Z0-9]*$/,
    // });

    // var result = validator.validate_pattern();
    // console.log(result);
    var $inputs = $('[data-rule]');
    var inputs = [];
    var $form = $('#signup');

    $inputs.each(function(index,node){
       inputs.push(new Input(node));
    })

    $form.on('submit',function(e){
       e.preventDefault();
       $inputs.trigger('blur');
      for(var i =0;i<inputs.length;i++){
         var item = inputs[i];
         var r = item.validator.is_valid();
         if(!r){
            alert('格式输入错误');
            return;
            
         }
      }
      return  alert("注册成功");
    })




 })
