const Benchmark = {
    run: function() {
        var VAR_1 = "hello";
        var VAR_2 = 1000;
        while (VAR_2--) {
          if (VAR_1.indexOf("hel") > -1 && VAR_1.indexOf("lo") > -1) {
          }
        }
    }
};