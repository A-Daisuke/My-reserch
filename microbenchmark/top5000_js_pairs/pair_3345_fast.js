const Benchmark = {
    run: function() {
        var VAR_1 = new Array(9000);
        var VAR_4 = null;
        for (var VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5 += 1) {
          VAR_4 = VAR_1[VAR_5];
        }
    }
};