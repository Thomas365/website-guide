$(function(){
    $.get('./data/website.json',function(result){        
        $(".website-classify").html(template('website-template',result['website-classify']))
    })

    $('.btnAdd').on('click',function(){
        var url = $('.url_input').val();
        if($('script[src="'+url+'"]').length){
            alert('已经添加，不要重复添加')
        }else{
            var id = $('script').length;
            $('body').append('<script id=add'+id+' src='+url+'></script>');
            $('.libList').append('<li>'+url+'</li>');
            $('.url_input').val('');
        }        
        
    })
})