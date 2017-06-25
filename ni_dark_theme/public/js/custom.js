/*
** Custom JS from AlienHu
** to override css and components
*/

$(document).ready(function(){
    
    // get dekstop icon name from config/config.json
    var wrappers= $('.case-wrapper');
    var newLabel= "";
    $.getJSON('/assets/ni_dark_theme/config/config.json', function(data) {
        var desktopModules=[];
        var desktopLabels=[];
        $.each(data.desktop_show, function(key, val) {
            desktopModules.push(val[0]);
            desktopLabels.push(val[1]);
        })
        jQuery.each(wrappers, function(index, item) {
            var parent=wrappers[index];
            var result=$(parent).find('span');
            // remove preicons
            var preIcon=$(parent).find('i');
            $(preIcon).remove();
            var temp=$(parent).find('.app-icon');
            var label=result.text();
            // alert(label);
            // console.log('before checked '+label);
            // if first three char are numbers
            if($.isNumeric((label.substr(0,3)))){
                label=label.substr(3,label.length);
                console.log('matched till 3 char with '+label.substr(0,3));
            }
            // if first two char are numbers
            if($.isNumeric((label.substr(0,2)))){
                label=label.substr(2,label.length);
                console.log('match till 2nd char');
            }
            // if first char is number
            if($.isNumeric((label.substr(0,1)))){
                label=label.substr(1,label.length);
                console.log('match for 1st char');
            }
            // console.log('after checked '+label);

            //console.log(label);
            //var match= jQuery.inArray( label, configData );
            //console.log('match value: '+match);
            var matchPos=jQuery.inArray( label, desktopModules );
            label=desktopModules[matchPos];
            if( matchPos >= 0){
                $(temp).append('<i class="custom-icon"></i>');
                var tempI=$(parent).find('.custom-icon');
                $(tempI).css('background','url("/assets/ni_dark_theme/img/'+label.toLowerCase().replace(' ','')+'.svg")');
                $(result).text(desktopLabels[matchPos]);
            }
            else{
                $(parent).hide();
            }

        });
    });

    // hide help and notification from top nav menu
    var headerdropdowns=$('.navbar-default .container .dropdown-toggle');
    var hl=headerdropdowns.length;
    // console.log('dd: '+hl);
    $(headerdropdowns[hl-2]).hide();
    $(headerdropdowns[hl-1]).hide();
});
