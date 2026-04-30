const Benchmark = {
    run: function() {
        var VAR_1 = "hello ";
        var VAR_2 = "world";
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1 += VAR_2;
        }
    }
};