const Benchmark = {
    run: function() {
        var VAR_1 = true;
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1 = false;
        }
    }
};