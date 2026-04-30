const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_4 = "";
        while (VAR_1--) {
          VAR_4 += "hello";
        }
        var VAR_5 = VAR_4;
    }
};