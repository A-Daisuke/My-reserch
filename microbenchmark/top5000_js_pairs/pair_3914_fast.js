const Benchmark = {
    run: function() {
        var VAR_1 = 200;
        var VAR_2 = [];
        var VAR_7 = 1;
        var VAR_8 = 1;
        for (var VAR_4 = 2; VAR_4 < VAR_1; VAR_4++) {
          var VAR_9 = VAR_7 + VAR_8;
          VAR_7 = VAR_8;
          VAR_8 = VAR_9;
        }
    }
};