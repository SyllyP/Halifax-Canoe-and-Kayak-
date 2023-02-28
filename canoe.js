$(function() {
    console.log( "ready!" );
    let largeSize = $(window).width() > 800;


    $("#hamburgerDropdown").hide();

    let hamburgerOnClick = function() {
        $("#hamburgerDropdown").toggle();
    };

    $("#hamburger").click(hamburgerOnClick); 


    let setSmallText = function() {
        $(".maincontenttextlarge").toggleClass("maincontenttextlarge maincontenttextsmall");
        $(".upcomingadventurestextlarge").toggleClass("upcomingadventurestextlarge upcomingadventurestextsmall");
        $(".mainimagefontlarge").toggleClass("mainimagefontlarge mainimagefontsmall");
        //$(".maincontentwidth").width("800px");
    };

    let setLargeText = function() {
        $(".maincontenttextsmall").toggleClass("maincontenttextsmall maincontenttextlarge");
        $(".upcomingadventurestextsmall").toggleClass("upcomingadventurestextsmall upcomingadventurestextlarge");
        $(".mainimagefontsmall").toggleClass("mainimagefontsmall mainimagefontlarge");
        //$(".maincontentwidth").width("1200px");
    };

    if (!largeSize) {
        setSmallText();
    }

    let setContentWidth = function(width) {
        if (width > 1200) {
            $(".maincontentwidth").width(1200);
            $(".mainimage").height(800);
        } else {
            $(".maincontentwidth").width(width);
            $(".mainimage").height(width * 2.0 / 3.0);
        }
    };

    setContentWidth($(window).width());

    $(window).resize(function() {
        // This will execute whenever the window is resized
        //$(window).height(); // New height
        let width = $(window).width(); // New width
        if (width > 800 && !largeSize){
            setLargeText();
            largeSize = true;
        } else if (width <= 800 && largeSize) {
            setSmallText();
            largeSize = false;
        }

        setContentWidth(width);
      });

    });