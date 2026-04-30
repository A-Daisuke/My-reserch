const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3);
        }
        var VAR_4 = Math.min(VAR_1);
        var VAR_5 = Math.max(VAR_1);
        var VAR_6 = Math.min(VAR_2);
        var VAR_7 = Math.max(VAR_2);
    }
};