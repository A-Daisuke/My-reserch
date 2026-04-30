const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(1);
        }
        var VAR_3;
        for (var VAR_5 = 0, VAR_6 = VAR_1.length; VAR_5 < VAR_6; VAR_5++) {
          VAR_3 = VAR_1[VAR_5];
        }
    }
};