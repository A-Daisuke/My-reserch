const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(100000));
        var VAR_3 = 0;
        while (VAR_3 < VAR_1.length) {
          VAR_1[VAR_3];
          VAR_3++;
        }
    }
};