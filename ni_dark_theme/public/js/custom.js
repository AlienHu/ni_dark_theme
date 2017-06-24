/*
** Custom JS from AlienHu
** to override css and components
*/

$(document).ready(function(){
    // desktop icon handler
    var wrappers= $('.case-wrapper');
    jQuery.each(wrappers, function(index, item) {
        var parent=wrappers[index];
        var result=$(parent).find('span');
        // remove preicons
        var preIcon=$(parent).find('i');
        $(preIcon).remove();
        var temp=$(parent).find('.app-icon');
        var label=result.text();
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
        if(label=='Warranty Claim'){
            $(parent).hide();
        }
        else if(label=='ToDo'){
            $(parent).hide();
        }
        else if(label=='Explore'){
            $(parent).hide();
        }
        else if(label=='Task'){
            $(parent).hide();
        }
        else if(label=='Accounts'){
            $(temp).append('<i class="custom-icon icon-account"></i>');
            var tempI=$(parent).find('.custom-icon');
            $(tempI).css('background','url("/assets/ni_dark_theme/img/account.svg")');
        }
        else if(label=='POS'){
            $(result).text('Sales');
            $(temp).append('<i class="custom-icon icon-pos"></i>');
            var tempI=$(parent).find('.custom-icon');
            $(tempI).css('background','url("/assets/ni_dark_theme/img/pos.svg")');
        }
        else if(label=='Item'){
            $(temp).append('<i class="custom-icon icon-item"></i>');
            var tempI=$(parent).find('.custom-icon');
            $(tempI).css('background','url("/assets/ni_dark_theme/img/item.svg")');
        }
        else if(label=='Sales Invoice'){
            $(result).text('Invoice');
            $(temp).append('<i class="custom-icon icon-invoice"></i>');
            var tempI=$(parent).find('.custom-icon');
            $(tempI).css('background','url("/assets/ni_dark_theme/img/invoice.svg")');
        }
        else if(label=='Purchase Order'){
            $(temp).append('<i class="custom-icon icon-purchase"></i>');
            var tempI=$(parent).find('.custom-icon');
            $(tempI).css('background','url("/assets/ni_dark_theme/img/purchase.svg")');
        }
        else if(label=='Customer'){
            $(temp).append('<i class="custom-icon icon-customer"></i>');
            var tempI=$(parent).find('.custom-icon');
            $(tempI).css('background','url("/assets/ni_dark_theme/img/customer.svg")');
        }
        else if(label=='Buying'){
            $(temp).append('<i class="custom-icon icon-buying"></i>');
            var tempI=$(parent).find('.custom-icon');
            $(tempI).css('background','url("/assets/ni_dark_theme/img/buy.svg")');
        }
    });

    // remove
    // alert($('ul.module-sidebar-nav').length);
});
