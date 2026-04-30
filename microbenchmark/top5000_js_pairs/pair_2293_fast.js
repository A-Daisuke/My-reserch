const Benchmark = {
    run: function() {
        var VAR_2 = /^bottom\-/;
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1 = VAR_1 + 1) {
          "my string of text".match(VAR_2);
        }
    }
};