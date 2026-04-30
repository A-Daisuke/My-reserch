const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(100000));
        var VAR_3 = 0;
        var VAR_4 = VAR_1.VAR_4;
        while (VAR_3 < VAR_4) {
          VAR_1[VAR_3];
          VAR_3++;
        }
    }
};