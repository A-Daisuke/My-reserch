const Benchmark = {
    run: function() {
        var VAR_1 = false;
        var VAR_2 = 1.5;
        var VAR_3 = 0;
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_3 += Math[VAR_1 ? "floor" : "round"](VAR_2 + VAR_4);
          VAR_1 = !VAR_1;
        }
    }
};