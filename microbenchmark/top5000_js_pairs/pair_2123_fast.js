const Benchmark = {
    run: function() {
        VAR_1 = new Array(10000);
        while ((VAR_3 = VAR_1.shift())) {
          VAR_4 = VAR_3;
        }
    }
};