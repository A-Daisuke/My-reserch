const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1; VAR_2 <= 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        VAR_3 = Math.round(Math.random() * 10000);
        for (VAR_2 in VAR_1) {
          if (VAR_2 == VAR_3) {
            break;
          }
        }
    }
};