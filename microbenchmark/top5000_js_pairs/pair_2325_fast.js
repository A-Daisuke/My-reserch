const Benchmark = {
    run: function() {
        var VAR_2 = new RegExp("query", "i");
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2.test("no match");
          VAR_2.test("query match");
        }
    }
};