const Benchmark = {
    run: function() {
        var VAR_1 = ["a"];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push("b");
        }
        var VAR_3 = VAR_1.join("");
    }
};