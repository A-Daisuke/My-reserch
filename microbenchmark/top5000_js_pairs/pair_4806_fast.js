const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; ++VAR_2) {
          VAR_1.push(1, 2, 3);
          while (VAR_1.length) VAR_1.pop();
        }
    }
};