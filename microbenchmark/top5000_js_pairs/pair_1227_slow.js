const Benchmark = {
    run: function() {
        var VAR_1 = 10000,
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        while (0 !== VAR_2.length) {
          VAR_2.length--;
        }
    }
};