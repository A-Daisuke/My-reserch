const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.random() * 10000);
        }
        VAR_3 = [];
        for (VAR_4 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_3.push(VAR_1[VAR_2] >> 1);
        }
    }
};