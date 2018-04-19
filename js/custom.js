(function($) {

    "use strict";

    // PRE LOADER
    $(window).load(function() {
        $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // navigation Section
    $('.navbar-collapse a').on('click', function() {
        $(".navbar-collapse").collapse('hide');
    });


    // Parallax Js
    function initParallax() {
        $('#home').parallax("50%", 50);
        $('#service').parallax("50%", 40);
        $('#about').parallax("50%", 20);
        $('#work').parallax("50%", 30);
        $('#contact').parallax("50%", 10);
    }
    initParallax();


    // smoothscroll js
    $(function() {
        $('#home a, #about a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // WOW Animation js
    new WOW({ mobile: false }).init();

})(jQuery);


var nali = (function() {

    var
        _validateEmail = function(mail) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                return (true);
            }
            return (false);
        },

        _resumeClick = function() {
            var mailid = $(".emailid").val();
            mailid = mailid.trim();
            if (_validateEmail(mailid)) {
                $(".emailErrorMsg").hide();
                $(".requestResume").html("Requesting..");
                $.post("email.php", { emailid: mailid }).done(function(data) {
                    if (data.mailStatus) {
                        $(".requestResume").hide();
                        $(".emailid").hide();
                        $(".resumeHeading").html("Thanks for your request, you will soon get an email from me.");
                        $(".requestResume").hide();
                    } else {
                        $(".resumeHeading").html("Oh ho something went wrong, you can call me at +91(998) 636 8357");
                    }
                });
            } else {
                $(".emailErrorMsg").show();
            }
        },
        _moreClick = function(_this) {
            if ($(".skillsDisplay").hasClass("fullView")) {
                $(".skillsDisplay").removeClass("fullView");
                _this.html("<a href='javascript:void(0);'><i class='fa fa-angle-double-down' aria-hidden='true'></i> View more</a>");
            } else {
                $(".skillsDisplay").addClass("fullView");
                _this.html("<a href='javascript:void(0);'><i class='fa fa-angle-double-up' aria-hidden='true'></i> View less</a>");
            }
        };

    return {
        resumeClick: _resumeClick,
        moreClick:_moreClick
    };
})();

window._mfq = window._mfq || [];
(function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.async = true;
    mf.src = "//cdn.mouseflow.com/projects/71900693-07a9-40df-9b75-00869706f665.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
})();

$(document).ready(function() {

    $("#jumpingButton").on("click", function() {
        $(this).find("i").removeClass("infinite");
    });

    $('html, body').animate({ scrollTop: '0px' }, 300);


    $(".resumeDownload").on("click", function() {
        ga('send', 'event', 'resumeDownloadButton', 'click', 'Fall Campaign');
    });

    var topLength = $(".selfNavigationMenu").offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= topLength - 30) {
            $('.selfNavigationMenu').addClass('fixed-header');
        } else {
            $('.selfNavigationMenu').removeClass('fixed-header');
        }
    });

    $(".requestResume").on("click", function() {
        nali.resumeClick();
    });

    $(".viewMoreOption").on("click", function() {
        nali.moreClick($(this));
    });

});