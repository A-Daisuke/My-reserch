const Benchmark = {
    run: function() {
        var VAR_2 = new RegExp("^bottom-");
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1 = VAR_1 + 1) {
          VAR_2.test("my string of text");
        }
    }
};