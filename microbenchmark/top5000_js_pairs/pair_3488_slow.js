const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = 0;
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2 += Math.pow(2, VAR_1 % 4);
        }
    }
};