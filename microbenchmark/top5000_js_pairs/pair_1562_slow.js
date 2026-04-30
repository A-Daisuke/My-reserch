const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          eval("x = 1+2+3+4+5");
        }
    }
};