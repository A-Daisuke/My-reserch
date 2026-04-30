const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        for (var VAR_5 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          VAR_1[VAR_3];
        }
    }
};