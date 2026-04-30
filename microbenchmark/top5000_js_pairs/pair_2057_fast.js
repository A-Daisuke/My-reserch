const Benchmark = {
    run: function() {
        var VAR_1 = 10000,
          VAR_4 = "";
        while ((VAR_1 = VAR_1 - 1)) {
          VAR_4 = VAR_4 + VAR_1.toString();
        }
    }
};