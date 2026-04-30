const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2;
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2 += 1) {
          VAR_1.push(VAR_2 * VAR_2);
        }
        var VAR_3, VAR_5;
        for (var VAR_6 of VAR_1) {
          VAR_3 = (VAR_3 + VAR_2) % 7;
        }
    }
};