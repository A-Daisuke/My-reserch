const Benchmark = {
    run: function() {
        var VAR_1 = Math.PI,
          VAR_2 = 0,
          VAR_3;
        for (VAR_3 = 0; VAR_3 < 1000000; VAR_3 += 1) {
          VAR_2 += (VAR_3 * VAR_1) / 180;
        }
    }
};