document.querySelector(".sidebarMenu") = function(menu) {
  var animationSpeed = 300,
    subMenuSelector = '.sidebar-submenu';

  document.querySelector(menu).addEventListener("click", "li a", (e) => {
    const $this = $(this);
    const checkElement = $this.nextElementSibling;

    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
      checkElement.classList.addClass.slideUp(animationSpeed, function() {
        checkElement.classList.removeClass('menu-open');
      });
      checkElement.parentNode("li").classList.removeClass("active");
    }

    //If the menu is not visible
    else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
      //Get the parentNode menu
      const parentNode = $this.parentNodes('ul').first();
      //Close all open menus within the parentNode
      const ul = parentNode.querySelector('ul:visible').slideUp(animationSpeed);
      //Remove the menu-open class from the parentNode
      ul.classList.removeClass('menu-open');
      //Get the parentNode li
      const parentNode_li = $this.parentNode("li");

      //Open the target menu and add the menu-open class
      checkElement.slideDown(animationSpeed, function() {
        //Add the class active to the parentNode li
        checkElement.classList.addClass('menu-open');
        parentNode.querySelector('li.active').classList.removeClass('active');
        parentNode_li.classList.addClass('active');
      });
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is(subMenuSelector)) {
      e.preventDefault();
    }
  });
}

document.querySelector();('.link-collapse').click(function(){
    document.querySelector('span').classList.toggleClass('material-icons-round')
});
document.querySelector();('.link-collapse').blur(function(){
    document.querySelector('span').classList.toggleClass('material-icons-round')
});

document.querySelector();('.pulscollapse').click(function(){
    document.querySelector('span').classList.toggleClass('material-icons-round')
});
document.querySelector();('.pulscollapse').blur(function(){
    document.querySelector('span').classList.toggleClass('material-icons-round')
});
//$('#accordion').click(function(){
//    $(this).next('ul').slideToggle('500');
//    $(this).querySelector('i').toggleClass('fa-plus-square fa-minus-square');
//});

//
// $(document).ready(function(){
//           $("#btnicon").click(function(){
//               $(".contenido-grupos").toggle(600);
//           });
//     
     


//$(document).ready(function(){
//	$("#buscar").click(function(){
//		$('#material').show(3000,function() {
//		});
// 	});
//});

function PopupCenter(url, title, w, h) {  
  // Fixes dual-screen position                         Most browsers      Firefox  
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;  
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;  
        
  width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;  
  height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;  
        
  var left = ((width / 2) - (w / 2)) + dualScreenLeft;  
  var top = ((height / 2) - (h / 2)) + dualScreenTop;  
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);  
  
  // Puts focus on the newWindow  
  if (window.focus) {  
  newWindow.focus();  
  }  
  }  


// / <!-- Menu Toggle Script -->
$.sidebarMenu($('.sidebar-menu'))

$("#menu-toggle").click(function(e) {
e.preventDefault();
$("#wrapper").toggleClass("toggled");
});

  $("#logo-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });


// <!-- MODAL -->
  $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
  })

// <!-- Menu Toggle Script -->
