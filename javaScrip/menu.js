/**
 * Created by HongNhung Nguyen on 5/9/2014.
 */
$(function () {
    time();
    setInterval("imgChangeBird()", 2000);
    setInterval("imgChangeBird1()", 3000);
    $(".detail-lesson").hide();
    $(".news-detail-item").hide();
    $("#home").click(function(){
        $(".detail-lesson").fadeOut("fast");
        $(".lesson").fadeIn("fast");

    });
    $(".lesson-item ul a").click(function(){
        $(".lesson").fadeOut("slow");
        $(".detail-lesson").fadeIn("fast");
    });
    $(".new-word").click(function(){
        $(".new-word-detail").removeClass("none");

    });
    //login

        $('a.login-window').click(function() {

            //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
            var loginBox = $(this).attr('href');

            //cho hiện hộp đăng nhập trong 300ms
            $(loginBox).fadeIn("slow");

            // thêm phần tử id="over" vào sau body
            $('body').append('<div id="over"></div>');
            $('#over').fadeIn(300);

            return false;
        });

        // khi click đóng hộp thoại
        $(document).on('click', "a.close, #over", function() {
            $('#over, .login').fadeOut(300 , function() {
                $('#over').remove();
            });
            return false;
        });
        //info
        ("#info").click(function() {

            //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
            var loginBox = $(this).attr('href');

            //cho hiện hộp đăng nhập trong 300ms
            $(loginBox).fadeIn("slow");

            // thêm phần tử id="over" vào sau body
            $('body').append('<div id="over"></div>');
            $('#over').fadeIn(300);

            return false;
        });

        // khi click đóng hộp thoại
        $(document).on('click', "a.close, #over", function() {
            $('#over, .login').fadeOut(300 , function() {
                $('#over').remove();
            });
            return false;
        });
});
//Show time
function time() {
    var today = new Date();
    var weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    var day = weekday[today.getDay()];
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    nowTime = h+":"+m+":"+s;
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = day+', '+ dd+'/'+mm+'/'+yyyy;

    tmp='<span class="date">'+today+' | '+nowTime+'</span>';

    document.getElementById("clock").innerHTML=tmp;

    clocktime=setTimeout("time()","1000","JavaScript");
    function checkTime(i)
    {
        if(i<10){
            i="0" + i;
        }
        return i;
    }
}

//Img_doll
function imgChangeBird() {
    var curPhoto = $("#bird div.current");
    var nextPhoto = curPhoto.next();
    if (nextPhoto.length == 0)
        nextPhoto = $("#bird div:first");
    curPhoto.removeClass("current").addClass("previous");
    nextPhoto.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000, function () {
        curPhoto.removeClass("previous");
    });
}
function imgChangeBird1() {
    var curPhoto1 = $("#bird1 div.current1");
    var nextPhoto1 = curPhoto1.next();
    if (nextPhoto1.length == 0)
        nextPhoto1 = $("#bird1 div:first");
    curPhoto1.removeClass("current1").addClass("previous1");
    nextPhoto1.css({opacity: 0.0}).addClass("current1").animate({opacity: 1.0}, 1000, function () {
        curPhoto1.removeClass("previous1");
    });
}