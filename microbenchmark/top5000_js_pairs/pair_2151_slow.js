const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = "",
          VAR_3 = [];
        VAR_2 = "";
        VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < 10000; ++VAR_1) {
          VAR_3.push("a");
        }
        VAR_2 = VAR_3.join("");
    }
};