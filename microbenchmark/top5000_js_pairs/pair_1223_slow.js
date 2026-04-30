const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.push((Math.random() * 10000) | 0);
        }
        var VAR_4 = {};
        var VAR_5 = VAR_2.length,
          VAR_6;
        for (VAR_3 = 0; VAR_3 < VAR_5; ) VAR_4[VAR_2[VAR_3++]] = true;
        VAR_1 = Object.getOwnPropertyNames(VAR_4);
    }
};