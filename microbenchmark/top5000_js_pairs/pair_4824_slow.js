const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 300; VAR_3++) {
          VAR_2.push("string,");
        }
        VAR_1 = VAR_2.join("");
    }
};