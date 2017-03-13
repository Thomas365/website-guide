$(function(){
    $.get('./data/website.json',function(result){        
        $(".website-classify").html(template('website-template',result['website-classify']))
    })
})