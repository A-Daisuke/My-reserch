const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_5 = "";
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_5 += "string - " + VAR_3;
        }
    }
};