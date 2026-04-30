const Benchmark = {
    run: function() {
        var VAR_4 = new Array(10000);
        var VAR_3 = 0,
          VAR_5 = VAR_4.length;
        while (++VAR_3 < VAR_5) VAR_4[VAR_3 - 1] = 0;
    }
};