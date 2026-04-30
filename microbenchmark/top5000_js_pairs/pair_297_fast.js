const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(100000));
        for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          VAR_1[VAR_3];
        }
    }
};