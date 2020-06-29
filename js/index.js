 $(document).ready(function(){
   
  });
  $('.scroll-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 600);
});

function openCity(evt, type) {
           
            var i, tabcontent, tablink;
            var currenttap = document.getElementsByClassName(type);
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablink = document.getElementsByClassName('tab-link');
            for (i = 0; i < tablink.length; i++) {
                tablink[i].className = tablink[i].className.replace('current', '');
            }

            document.getElementById(type).style.display = "block";
            // evt.currentTarget.className +="current";
            $('.tab-link').click(function () {
                $(this).addClass('current');
            });
        }
function openimg(imgs) {
            var expandedImg = document.getElementById('expandedimg');
            expandedImg.src = imgs.src;
            expandedImg.parentElement.style.display = "block";
     }
     

function openmenu() {
    var navmenu = document.getElementById('mylinks');

    $('#mylinks').slideToggle();
    // if ( navmenu.style.display == 'block') {
       
    //     $('.nav-menu').slideUp(500);
    // }
    // else {
        
    //     $('.nav-menu').slideDown(500);
    //     $('.nav-menu').sh
        
    // }
}



function menupage(evt,type) {
    var i, menucontent, menulinks;
    $('.firstlink').removeClass();
    menucontent = document.getElementsByClassName('menucontent');
    for (i = 0; i <  menucontent.length; i++) {
        menucontent[i].style.display = "none";
    }
    menulinks = document.getElementsByClassName("menulink");
    for (i = 0; i < menulinks.length; i++) {
        menulinks[i].className =  menulinks[i].className.replace(" active", "");
      
    }
    document.getElementById(type).style.display = "block";
    evt.currentTarget.className += " active";

  }
