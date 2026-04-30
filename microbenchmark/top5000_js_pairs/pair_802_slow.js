const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = [];
        for (var VAR_3 = 30000; VAR_3 > 0; VAR_3--) {
          VAR_2.push("String concatenation. ");
        }
        VAR_1 = VAR_2.join("");
    }
};