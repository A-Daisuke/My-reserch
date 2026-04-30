const Benchmark = {
    run: function() {
        var VAR_1 = null,
          VAR_2 = null;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1 = new Object();
          VAR_2 = new Array();
        }
    }
};