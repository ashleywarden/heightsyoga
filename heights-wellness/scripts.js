$(function(){
  $(".container li").addClass("lead");

  /** Navigation accessibililty */
  $("nav li").on("keydown", function(event){
      if(event.key == "ArrowRight") {
        $(this).next().focus();
        $(".dropdown-content").css("display", "");
        $(".dropdown-content").css("margin-top", "");
      }
      else if(event.key == "ArrowLeft") {
        $(this).prev().focus();
        $(".dropdown-content").css("display", "");
        $(".dropdown-content").css("margin-top", "");
      }
      //Tab key
      else if(event.keyCode == 9) {
        $(this).next().focus();
        $(".dropdown-content").css("display", "");
        $(".dropdown-content").css("margin-top", "");
      }
      else if(event.key == "Enter") {
        event.preventDefault();
        $("a", this)[0].click();
        $(".dropdown-content", this).css("display","block");
        $(".dropdown-content", this).css("margin-top","0");
      }
  });

  /** Wellness Practitioners bio */
  $(".text-muted #robert").on("click", function(event){
    event.preventDefault();
    if($(".bio-hidden__robert").css("display") == "none"){
      $(".bio-hidden__robert").css("display", "inline");
      $("#robert").text("Read Less");
    }
    else {
      $(".bio-hidden__robert").css("display", "none");
      $("#robert").text("Read More");
    }
  });

  $(".text-muted #annie").on("click", function(event){
    event.preventDefault();
    if($(".bio-hidden__annie").css("display") == "none"){
      $(".bio-hidden__annie").css("display", "inline");
      $("#annie").text("Read Less");
    }
    else {
      $(".bio-hidden__annie").css("display", "none");
      $("#annie").text("Read More");
    }
  });

  $(".text-muted #nina").on("click", function(event){
    event.preventDefault();
    if($(".bio-hidden__nina").css("display") == "none"){
      $(".bio-hidden__nina").css("display", "inline");
      $("#nina").text("Read Less");
    }
    else {
      $(".bio-hidden__nina").css("display", "none");
      $("#nina").text("Read More");
    }
  });

  $(".container li").addClass("lead");

  $(".card a").css("margin-bottom", "5vh");

  $(".card").css({"color": "#292929"});


});