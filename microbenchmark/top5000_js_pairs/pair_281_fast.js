const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(100000));
        var VAR_3 = VAR_1.VAR_3;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          VAR_1[VAR_4];
        }
    }
};