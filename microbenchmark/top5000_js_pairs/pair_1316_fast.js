const Benchmark = {
    run: function() {
        var VAR_2 = 100000;
        var VAR_3 = "bcd";
        while (VAR_2--) {
          VAR_3 = "a" + VAR_3;
        }
    }
};