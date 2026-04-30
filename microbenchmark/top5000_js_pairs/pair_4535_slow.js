const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_2.push("1", "2", VAR_3);
        }
        VAR_1 = VAR_2.join("");
    }
};