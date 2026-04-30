const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 2000; VAR_2++) {
          VAR_1.shift("bar" + VAR_2);
        }
    }
};