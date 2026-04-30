const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 20000; VAR_2++) {
          VAR_1.push("make");
        }
        VAR_1 = VAR_1.join("");
    }
};