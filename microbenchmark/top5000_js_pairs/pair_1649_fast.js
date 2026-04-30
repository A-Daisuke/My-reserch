const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_3 = 0;
        var VAR_2 = 0;
        var VAR_4 = 0;
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_5.push(Math.floor(Math.random() * 1000));
        }
        for (var VAR_8 = 0; VAR_8 < VAR_5.length; ++VAR_8) VAR_2 += VAR_5[VAR_8];
    }
};