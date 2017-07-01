/*
** Custom JS from AlienHu
** to override css and components
*/

/*
** ABOUT config.json
**
** obey: true/false to apply this config [boolean]
**
** name: module name [String, Case Insensitive]
** enable: true/false to enable the module [boolean]
** desktop: true/false to show/hide icon on desktop [boolean]
** [NOTE] icon will be visible only when enable and desktop both is set to true
** 
** label: label name to show [String, OPTIONAL]
** icon: icon to show [String, icon name]
** [NOTE]: icon should be in public/images/
**
** color: background-color of icon [valid color name of #hex value]
*/



$(document).ready(function(){
    // get dekstop icon name from config/config.json
    var wrappers= $('.case-wrapper');
    $.getJSON('/assets/ni_dark_theme/config/config.json', function(data) {
        if(data.obey!=true) return;
        var desktopModules=[];
        $.each(data.icons, function(key, val) {
            // push module names to array
            desktopModules.push(val['name'].toLowerCase());
        })

        jQuery.each(wrappers, function(index, item) {
            var parent=wrappers[index];
            var result=$(parent).find('span');
            // remove preicons
            var preIcon=$(parent).find('i');
            $(preIcon).remove();
            var temp=$(parent).find('.app-icon');
            var label=result.text().toLowerCase();

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
            var matchPos=jQuery.inArray( label, desktopModules);
            
            label=desktopModules[matchPos];
            if( matchPos >= 0 && data.icons[matchPos]['desktop']==true && data.icons[matchPos]['enable']==true){
                $(temp).append('<i class="custom-icon"></i>');
                var tempI=$(parent).find('.custom-icon');
                if(data.icons[matchPos]['icon']!="")
                    $(tempI).css('background','url("/assets/ni_dark_theme/img/'+data.icons[matchPos]['icon']+'")');
                else
                    $(tempI).css('background','url("/assets/ni_dark_theme/img/default.svg")');
                if(data.icons[matchPos]['label']!="")
                    $(result).text(data.icons[matchPos]['label']);
                // $(temp).css('background-color',data.icons[matchPos]['color']);
                // $(temp).css('background-color','red');
                if(data.icons[matchPos]['color']!="")
                    $(parent).css('background-color',data.icons[matchPos]['color']);
                
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
    $(headerdropdowns[hl-2]).hide(); // help
    $(headerdropdowns[hl-1]).hide(); // notification
});
