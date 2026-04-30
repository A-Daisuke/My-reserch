const Benchmark = {
    run: function() {
        var VAR_1 = "blah",
          VAR_2 = 1000;
        var VAR_6 = "";
        var VAR_7 = VAR_2;
        while (VAR_7--) {
          VAR_6 += VAR_1;
          VAR_6 += VAR_1;
          VAR_6 += VAR_1;
          VAR_6 += VAR_1;
          VAR_6 += VAR_1;
        }
    }
};