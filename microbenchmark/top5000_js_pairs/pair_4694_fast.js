const Benchmark = {
    run: function() {
        var VAR_1 = 200;
        var VAR_5 = 1;
        var VAR_6 = 1;
        for (var VAR_4 = 2; VAR_4 < VAR_1; VAR_4++) {
          var VAR_7 = VAR_5 + VAR_6;
          VAR_5 = VAR_6;
          VAR_6 = VAR_7;
        }
    }
};