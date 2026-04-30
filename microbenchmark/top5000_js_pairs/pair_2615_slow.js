const Benchmark = {
    run: function() {
        var VAR_1 = new String(),
          VAR_2 = new String("string");
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1 += VAR_2;
        }
    }
};