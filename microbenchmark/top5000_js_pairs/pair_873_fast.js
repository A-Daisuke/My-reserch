const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 100000;
        while (VAR_2--) VAR_1.push(Math.random());
        var VAR_3 = -1,
          VAR_4 = VAR_1.length,
          VAR_5 = -Infinity,
          VAR_6;
        while (++VAR_3 < VAR_4) if ((VAR_6 = VAR_1[VAR_3]) > VAR_5) VAR_5 = VAR_6;
    }
};