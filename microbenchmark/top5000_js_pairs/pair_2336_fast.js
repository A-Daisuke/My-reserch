const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1["attr" + VAR_2] = VAR_2;
        }
        var VAR_3 = 0;
        var VAR_5 = Object.keys(VAR_1);
        for (var VAR_6 = 0; VAR_2 < VAR_5.length; VAR_2++) {
          VAR_3 = VAR_1[VAR_2];
        }
    }
};