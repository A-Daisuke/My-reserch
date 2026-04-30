const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 100; VAR_2 = VAR_2 + 1) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_2 = VAR_1.length; VAR_2 >= 0; VAR_2--) {
          if (!~VAR_1.indexOf(VAR_2)) {
          }
        }
    }
};