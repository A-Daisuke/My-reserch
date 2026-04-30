const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.push(Math.sqrt(VAR_3 / 10));
        }
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3 += 0.1) {
          VAR_1 = Math.sqrt(VAR_3);
        }
    }
};