const Benchmark = {
    run: function() {
        var VAR_1 = Math.PI * 2;
        var VAR_2 = 10000;
        var VAR_3 = 0;
        for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
          VAR_3 += 0.1;
          if (VAR_3 > VAR_1 || VAR_3 < -VAR_1) {
            VAR_3 += VAR_3 < 0 ? VAR_1 : -VAR_1;
          }
        }
    }
};