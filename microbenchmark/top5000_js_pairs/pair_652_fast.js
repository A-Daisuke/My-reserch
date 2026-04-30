const Benchmark = {
    run: function() {
        var VAR_2 = /\d.\d.\d/;
        for (var VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          VAR_2.test("1.2.3");
        }
    }
};