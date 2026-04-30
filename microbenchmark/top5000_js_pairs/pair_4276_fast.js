const Benchmark = {
    run: function() {
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_5.push(VAR_6);
        }
        var VAR_7 = 0;
        var VAR_9 = 0;
        for (VAR_6 = 0; VAR_6 < VAR_5.length; VAR_6++) {
          VAR_7 += VAR_5[VAR_6];
        }
    }
};