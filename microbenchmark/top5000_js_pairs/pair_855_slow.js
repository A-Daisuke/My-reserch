const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 1000000;
        var VAR_3 = Math.PI;
        var VAR_4 = (2 * VAR_3) / VAR_2;
        for (var VAR_5 = 0; VAR_5 < VAR_2; ++VAR_5) {
          VAR_1 += Math.cos(VAR_4 * VAR_5 - VAR_3);
        }
    }
};