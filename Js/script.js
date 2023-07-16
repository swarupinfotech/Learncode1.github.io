// Owner: Swarup Mahato

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent = $("#Topics").html();
  $("#Topics").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent() {
    var newcontent = $("#main-page").html();
    $("#main-page").html(storedcontent);
    storedcontent = newcontent;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});

// ripple animation conditions

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent1();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent1 = $("#Conditionals").html();
  $("#Conditionals").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor-1", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent1() {
    var newcontent1 = $("#main-page").html();
    $("#main-page").html(storedcontent1);
    storedcontent1 = newcontent1;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});

// ripple animation Looping

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent2();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent2 = $("#Looping").html();
  $("#Looping").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor-2", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent2() {
    var newcontent2 = $("#main-page").html();
    $("#main-page").html(storedcontent2);
    storedcontent2 = newcontent2;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});

// ripple animation Arrays

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent3();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent3 = $("#Arrays").html();
  $("#Arrays").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor-3", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent3() {
    var newcontent3 = $("#main-page").html();
    $("#main-page").html(storedcontent3);
    storedcontent3 = newcontent3;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});

// ripple animation Strings

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent4();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent4 = $("#Strings").html();
  $("#Strings").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor-4", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent4() {
    var newcontent4 = $("#main-page").html();
    $("#main-page").html(storedcontent4);
    storedcontent4 = newcontent4;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});

// ripple animation Bit-manipulation

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent5();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent5 = $("#Bit-manipulation").html();
  $("#Bit-manipulation").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor-5", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent5() {
    var newcontent5 = $("#main-page").html();
    $("#main-page").html(storedcontent5);
    storedcontent5 = newcontent5;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});

// ripple animation Functions

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent6();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent6 = $("#Functions").html();
  $("#Functions").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor-6", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent6() {
    var newcontent6 = $("#main-page").html();
    $("#main-page").html(storedcontent6);
    storedcontent6 = newcontent6;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});

// ripple animation Structures

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent7();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent7 = $("#Structures").html();
  $("#Structures").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor-7", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent7() {
    var newcontent7 = $("#main-page").html();
    $("#main-page").html(storedcontent7);
    storedcontent7 = newcontent7;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});

// ripple animation Recursion

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(computed.getPropertyValue("border-left-width"));
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
        swapContent8();
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  storedcontent8 = $("#Recursion").html();
  $("#Recursion").remove();

  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function (e) {
    ripple_wrap.removeClass("goripple");
  });

  $("body").on("click", ".anchor-8", function (e) {
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });

  function swapContent8() {
    var newcontent8 = $("#main-page").html();
    $("#main-page").html(storedcontent8);
    storedcontent8 = newcontent8;
    setTimeout(function () {
      finish = true;
    }, 10);
  }
});
