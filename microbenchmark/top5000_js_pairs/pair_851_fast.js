const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 0;
        for (VAR_1 = 0; VAR_1 < 64000; VAR_1 += 1) {
          VAR_2 += VAR_1 === 9 || VAR_1 === 10 || VAR_1 === 13 || (VAR_1 >= 32 && VAR_1 <= 126) ? 1 : 0;
        }
    }
};