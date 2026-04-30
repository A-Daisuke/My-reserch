const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = ["a", "b"];
        for (var VAR_3 = "", VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
          VAR_3 = VAR_2.join("");
        }
    }
};