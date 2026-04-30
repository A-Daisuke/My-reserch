const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [];
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2.push("Text " + VAR_1);
        }
        var VAR_3 = VAR_2.join("");
    }
};