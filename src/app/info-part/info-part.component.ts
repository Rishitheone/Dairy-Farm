import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-part',
  templateUrl: './info-part.component.html',
  styleUrls: ['./info-part.component.scss']
})
export class InfoPartComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
    $(document).ready(function () {
      var zindex = 10;

      $("div.card").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("show")) {
          isShowing = true
        }

        if ($("div.cards").hasClass("showing")) {
          // a card is already in view
          $("div.card.show")
            .removeClass("show");

          if (isShowing) {
            // this card was showing - reset the grid
            $("div.cards")
              .removeClass("showing");
          } else {
            // this card isn't showing - get in with it
            $(this)
              .css({ zIndex: zindex })
              .addClass("show");

          }

          zindex++;

        } else {
          // no cards in view
          $("div.cards")
            .addClass("showing");
          $(this)
            .css({ zIndex: zindex })
            .addClass("show");

          zindex++;
        }

      });
    });
    // tabs animation///////////////////////////////
    $("#tile-1 .nav-tabs a").click(function () {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
      $("#tile-1 .slider").css({ "left": + position.left, "width": width });
    });
    var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
    var actPosition = $("#tile-1 .nav-tabs .active").position();
    $("#tile-1 .slider").css({ "left": + actPosition.left, "width": actWidth });

    ///////////////////////////////////
    ///////Slider js////////////////
  //   $('#blogCarousel').carousel({
  //     interval: 5000
  // });

  }

}
