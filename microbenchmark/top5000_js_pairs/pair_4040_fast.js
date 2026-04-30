const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 2000; VAR_2++) {
          VAR_1 += VAR_2;
        }
        var VAR_3 = -1,
          VAR_4;
        while ((VAR_4 = VAR_1[++VAR_2])) {}
    }
};