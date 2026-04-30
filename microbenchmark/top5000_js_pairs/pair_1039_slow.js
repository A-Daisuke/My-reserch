const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = "message a",
          VAR_3 = "message b";
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1 = [VAR_2, VAR_3].join("<br>");
        }
    }
};