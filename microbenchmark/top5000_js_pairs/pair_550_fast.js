const Benchmark = {
    run: function() {
        var VAR_1 = "100v45kb";
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          +VAR_1;
        }
    }
};