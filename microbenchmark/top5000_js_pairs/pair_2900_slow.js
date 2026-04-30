const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push("TEST");
          VAR_1.push("PLUS");
          VAR_1.push("EQUALS");
        }
        VAR_1.join("");
    }
};