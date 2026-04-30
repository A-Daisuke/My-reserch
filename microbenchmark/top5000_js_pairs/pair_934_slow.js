const Benchmark = {
    run: function() {
        for (var VAR_1 = [], VAR_2 = 0; VAR_2 < 5000; VAR_2++) {
          VAR_1.unshift(VAR_2);
        }
    }
};