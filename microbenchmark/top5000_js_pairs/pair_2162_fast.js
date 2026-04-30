const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = 10000;
        while (VAR_2--) {
          VAR_1 += "a";
        }
    }
};