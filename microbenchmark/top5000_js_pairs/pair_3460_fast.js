const Benchmark = {
    run: function() {
        VAR_1 = new Array(10000);
        VAR_2 = new Array(100);
        var VAR_5 = VAR_1.length;
        var VAR_3;
        for (var VAR_4 = 0; VAR_4 < VAR_5; VAR_4++) {
          VAR_3 = VAR_1[VAR_4];
        }
    }
};