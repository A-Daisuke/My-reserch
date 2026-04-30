const Benchmark = {
    run: function() {
        var VAR_1 = ".classquery-w900, .ltie9 [data-classquery*='.classquery-w900']";
        var VAR_2 = ".classquery-w600";
        for (var VAR_3 = 0; VAR_3 < 9999; VAR_3++) {
          VAR_1.indexOf(VAR_2) > -1;
        }
    }
};