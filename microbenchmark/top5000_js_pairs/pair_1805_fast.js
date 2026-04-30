const Benchmark = {
    run: function() {
        var VAR_1 = 1000000;
        var VAR_2 = new Array(VAR_1);
        for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
          VAR_2[VAR_4];
        }
    }
};