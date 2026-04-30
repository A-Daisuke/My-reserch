const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.random());
        for (var VAR_5 = -1, VAR_6 = VAR_1.length; ++VAR_2 < VAR_6; ) {
          var VAR_7 = VAR_1[VAR_2];
        }
    }
};