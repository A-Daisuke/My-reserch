const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 <= 1000; VAR_2++) {
          VAR_1.push("some string " + VAR_2);
        }
        var VAR_3 = VAR_1.join("");
    }
};