(function($) {

    $.imgText = function(obj, event) {

        let $img = $(obj);

        addNewElement = function(obj, event) {
            let left = event.pageX;
            let top = event.pageY;
            let dynamicID = gtextId('newTxt-id');
            txtFocus = dynamicID;
            $(obj).parent().append("<span contenteditable='true' style='position:absolute; top:" + top + "px;left:" + left + "px' id='" + dynamicID + "'  class='text-area txtIod'></span>");
            $('#' + dynamicID).focus();
        }


        //  generate dynamic id
        gtextId = function(prefix) {
            let number = 1 + Math.floor(Math.random() * 6);
            let randomNumber = 3 + Math.floor(Math.random() * 9);
            let randomId = prefix + "-" + Math.floor(number * randomNumber);
            if ($("#" + randomId).length) {
                randomId = prefix + "-" + parseInt(Math.floor(number * randomNumber)) + parseInt(Math.floor(number * randomNumber));
            }
            return randomId;
        }

        // when focus the id then regenerate the newid

        $('body').on('focus', 'span', function() {
            generateDynamicId(this);
        });


        generateDynamicId = function(gdi) {
            let dynamicID = gtextId('newTxt-id');
            txtFocus = dynamicID;
            $(gdi).attr('id', dynamicID);
            txtFocus = dynamicID;
        };

        //when element is empty then remove the span element

        $('body').on('blur', '.text-area', function() {
            removeEmpty(this);
        });

        removeEmpty = function(rempty) {
            $('.text-area').each(function() {
                if ($(rempty).text() == '') {
                    $(rempty).remove();
                };
            });
        }

       let text_left = {
            left: 0
        };
        let text_right = {
            left: 'auto',
            right :0
        };
         let text_center = {
            left: '50%'

        };

        txtCtr =function(i){
            $('#'+ txtFocus).css(text_center);
        }
         txtRight =function(i){
            $('#'+ txtFocus).css(text_right);
        }
         txtLeft=function(i){
            $('#'+ txtFocus).css(text_left);
        }

        let globalVal = $('.textOp >li');
        let fontSz = $('.imgBold');
        let colorChnge = $('.colorChnage');

        $(globalVal).click(function() {
            titleCase(this);
            fontStyle(this);
        });
        //change fontweight

        imgBold = function() {
            $('#' + txtFocus).css({
                'font-weight': 'bold'
            });
        };



        // change color 
        changeColor = function(i) {
            let txtClr = $(i).val();
            $('#' + txtFocus).css({
                'color': txtClr 
            });
        };


        //change the title case
        titleCase = function(tc) {
            $(tc).addClass('activeSize');
            $(tc).siblings().removeClass('activeSize');
            let txtStyle = $(tc, '.sCase > ul >li.activeSize').text();
            $('#' + txtFocus).css({
                'text-transform': txtStyle
            });
        }

        //change the font style

        fontStyle = function(fs) {
            $(fs).addClass('activeSize');
            $(fs).siblings().removeClass('activeSize');
            let txtStyle = $(fs, '.sc-fsstyles >li.activeSize').text();
            $('#' + txtFocus).css({
                'font-style': txtStyle
            });
        }

        //change the fontsize

           fontSize = function(f) {
            let txtSize = $(f).val();
           $('#' + txtFocus).css({
                'font-size': txtSize + "px"
            });
        };

        //click functionsFGV

        $(fontSz).click(function() {
            imgBold();
        })
        $(colorChnge).change(function() {
            changeColor(this);
        });
         $(colorChnge).change(function() {
            changeColor(this);
        });
        $('.gfontSze').keyup(function() {
            fontSize(this);
        });

         $(obj).click(function(event) {
            addNewElement(this, event);
        });
    }

    $.fn.imgText = function(event, callback) {
        api = $.imgText(this, event);
        if ($.isFunction(callback)) callback.call(api);
        return this;
    };
}(jQuery));