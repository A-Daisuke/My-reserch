const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          /\d.\d.\d/.test("1.2.3");
        }
    }
};