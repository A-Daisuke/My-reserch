const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          if (VAR_2 % 2 === 1) VAR_1.push(VAR_2);
        }
    }
};