const Benchmark = {
    run: function() {
        var VAR_1 = -1,
          VAR_2 = 10000,
          VAR_3 = 3.2;
        for (; ++VAR_1 < VAR_2; ) {
          parseInt(VAR_3, 10);
        }
    }
};