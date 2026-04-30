const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (VAR_2 = 1; VAR_2 <= 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = 0;
        for (var VAR_4 of VAR_1) {
          VAR_3 += Math.sqrt(VAR_4);
        }
    }
};