import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function megaMenu(){
      $('.megamenu .dropdown').click('show.bs.dropdown', function (e) {
        var $dropdown = $(this).find('.dropdown-menu');
        var orig_margin_top = parseInt($dropdown.css('margin-top'));
        $dropdown.css({
          'margin-top': (orig_margin_top + 65) + 'px',
          opacity: 0
        }).animate({
          'margin-top': orig_margin_top + 'px',
          opacity: 1
        }, 420, function () {
          $(this).css({
            'margin-top': ''
          });
        });
      });
    }
    
    $(function(){
      "use strict";
      
      // Navigation
      megaMenu();
      
      $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
      });
       
      
    });
    
    (function ($) {
        "use strict";
       var header = $("#header");
        $(window).scroll(function () {
          
      if ($(this).scrollTop() > 50) {
        header.addClass("sticky");
                $(".navbar").addClass("fixed");
      }
          else {
             header.removeClass("sticky");
                $(".navbar").removeClass("fixed");
          }
        });
      
    
    })(jQuery);

    ////////////////////////////////////////////////////////////////////////////////
    (function($) { // Begin jQuery
      $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
          $(this).siblings('.nav-dropdown').toggle();
          // Close one dropdown when selecting another
          $('.nav-dropdown').not($(this).siblings()).hide();
          e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
          $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
          $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
          this.classList.toggle('active');
        });
      }); // end DOM ready
    })(jQuery); // end jQuery

  }
  

}
