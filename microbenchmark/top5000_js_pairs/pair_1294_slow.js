const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(+new Date());
        }
    }
};