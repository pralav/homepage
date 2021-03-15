$(document).ready(function() {
    $('#cb_slideshow').imagesLoaded( { background: true }, function() {
      console.log('#container background image loaded');
    });
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
    var titleCase= {
            run: function(str) {
          return str.toLowerCase().split(' ').map(function(word) {
            return word.replace(word[0], word[0].toUpperCase());
          }).join(' ');
        }
    }
    $(".nav-item a").on("click", function() {
      $(".nav-item a").removeClass("active");
      $(this).addClass("active");
    });
    function setTitle(newTitle){
          var titleStr=document.title;
          console.log(titleStr);
          var orindex=titleStr.indexOf("|")
          if(orindex!=-1){
                var newStr=titleStr.substr(0, orindex+1)+" "+
                titleCase.run(newTitle.trim());
                document.title=newStr;

          }
    }

    var href=window.location.pathname;
    var titles=href.split("/");
    if(titles.length>3){
        var title=titleCase.run(titles[2]);
        $(".nav-item").removeClass("active");
        $(".nav_"+title).addClass("active");
        setTitle(title);
    }else{
        $(".nav-item").removeClass("active");
        $(".nav_About").addClass("active");
        setTitle("Profile");
    }

    $("a[rel^='portfolio']").prettyPhoto({
            animation_speed: 'fast', /* fast/slow/normal */
            social_tools: '',
            theme: 'pp_default',
            horizontal_padding: 5,
            deeplinking: false,
        });

    var filterList = {
            init: function() {

                // MixItUp plugin
                // http://mixitup.io
                $('#portfoliolist').mixItUp({
                    targetSelector: '.portfolio',
                    target:'.portfolio',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap',
                    // call the hover effect
                    callbacks: {
                                onMixFail: function(state){
                                    alert('No elements found matching '+state.activeFilter);
                                },
                                onMixEnd: function(state){
                                    ;filterList.hoverEffect()
                                    console.log(state.activeFilter);
                                }
                            }

                });

            },
            hoverEffect: function() {
//            alert("hi");

                // Simple parallax effect
//                $('#portfoliolist .portfolio').hover(
//                        function() {
//                            $(this).find('.label').stop().animate({bottom: 0}, 200);
//                            $(this).find('img').stop().animate({top: -30}, 500);
//                        },
//                        function() {
//                            $(this).find('.label').stop().animate({bottom: -40}, 200);
//                            $(this).find('img').stop().animate({top: 0}, 300);
//                        }
//                );

            }

        };

        // Run the show!
        filterList.init();
});

