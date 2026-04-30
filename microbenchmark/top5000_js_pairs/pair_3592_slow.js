const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10; VAR_2 += 1) {
          VAR_1.push("x");
        }
        VAR_3 = [];
        for (var VAR_4 = 0; VAR_2 < 100; VAR_2 += 1) {
          VAR_3.push("x");
        }
        VAR_5 = [];
        for (var VAR_6 = 0; VAR_2 < 1000; VAR_2 += 1) {
          VAR_5.push("x");
        }
        var VAR_7 = "".concat.apply(VAR_1);
        var VAR_8 = "".concat.apply(VAR_3);
        var VAR_9 = "".concat.apply(VAR_5);
    }
};