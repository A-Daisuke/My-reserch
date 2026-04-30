const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < 5000; VAR_1++) {
          VAR_2.push(VAR_1);
        }
        for (VAR_1 = 0; VAR_1 < VAR_2.length; VAR_1++) {
          VAR_3.push(VAR_2[VAR_1] * 2);
        }
    }
};