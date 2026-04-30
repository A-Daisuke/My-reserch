const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 10000;
        while (VAR_2--) {
          VAR_1.push(VAR_2);
        }
        var VAR_4 = 0,
          VAR_5 = VAR_1.length;
        for (; VAR_2 > VAR_5; VAR_2++) {
          VAR_1[VAR_2]++;
        }
    }
};