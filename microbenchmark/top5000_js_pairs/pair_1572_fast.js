const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.random() * 1000);
        }
        var VAR_4 = 0,
          VAR_5 = VAR_1.length;
        for (; VAR_2 < VAR_5; VAR_2++) {
          Math.random() * VAR_1[VAR_2];
        }
    }
};