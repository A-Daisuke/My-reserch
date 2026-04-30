const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1 = VAR_1 + 1) {
          "my string of text".match(/^bottom\-/);
        }
    }
};