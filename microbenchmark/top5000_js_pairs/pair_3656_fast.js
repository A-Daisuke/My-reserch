const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(-500 + Math.random() * 1000);
        }
        var VAR_3 = 0;
        for (var VAR_4 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_3 = Math.round(VAR_1[VAR_2]);
        }
    }
};