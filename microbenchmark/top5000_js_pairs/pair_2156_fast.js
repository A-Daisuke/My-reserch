const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 50000; VAR_2++) {
          VAR_1.push("This is a test" + VAR_2);
        }
        for (var VAR_4 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push("This is a test" + VAR_2);
        }
    }
};