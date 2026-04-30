const Benchmark = {
    run: function() {
        var VAR_1 = "Test",
          VAR_2 = "Me",
          VAR_3 = "";
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++) {
          VAR_3 = [VAR_1, "john", VAR_2].join("");
        }
    }
};