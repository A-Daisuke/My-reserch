const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        var VAR_3 = 0,
          VAR_4 = VAR_1.length;
        for (; VAR_3 < VAR_4; ++VAR_3) {
          VAR_1[VAR_3];
        }
    }
};