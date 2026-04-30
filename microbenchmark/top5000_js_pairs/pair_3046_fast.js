const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        var VAR_4 = 0,
          VAR_5 = VAR_1.length;
        for (; VAR_4 < VAR_5; ++VAR_4) {
          VAR_1[VAR_4];
        }
    }
};