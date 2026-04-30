const Benchmark = {
    run: function() {
        let VAR_4 = [1, 1, 1, 1, 1, 1];
        let VAR_5 = 0;
        for (var VAR_3 = 0; VAR_3 < 10000000; VAR_3++) {
          VAR_5 = VAR_4[VAR_3 % 6];
        }
    }
};