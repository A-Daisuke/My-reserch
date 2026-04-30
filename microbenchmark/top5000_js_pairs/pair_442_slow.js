const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2;
        for (VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push("a");
        }
        VAR_1 = VAR_1.join("");
    }
};