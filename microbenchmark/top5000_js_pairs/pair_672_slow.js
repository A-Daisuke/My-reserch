const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2;
        for (VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        while (VAR_1.length > 0) {
          VAR_1.pop();
        }
    }
};