const Benchmark = {
    run: function() {
        var VAR_2 = /123/;
        for (var VAR_1 = 0; VAR_1 < 100; VAR_1++) {
          VAR_2.test(Math.random().toString());
        }
    }
};