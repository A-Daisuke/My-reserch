const Benchmark = {
    run: function() {
        var VAR_1 = "1 + 2";
        var VAR_2 = "return 1 + 2";
        var VAR_3 = new Function(VAR_2);
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_3();
        }
    }
};