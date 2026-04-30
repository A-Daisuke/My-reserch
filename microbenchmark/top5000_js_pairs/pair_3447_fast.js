const Benchmark = {
    run: function() {
        var VAR_1 = "bbc",
          VAR_2 = 1000,
          VAR_3 = "";
        while (VAR_2--) {
          VAR_3 += VAR_1;
        }
    }
};