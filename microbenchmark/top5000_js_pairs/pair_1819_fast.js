const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_5 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_3 = 0; VAR_2 < 10; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_4 in VAR_5) {
        }
    }
};