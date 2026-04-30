const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 52635;
        var VAR_4 = new Array(VAR_1),
          VAR_5 = 0;
        for (; VAR_5 < VAR_1; ) VAR_4[VAR_5++] = VAR_2;
    }
};