const Benchmark = {
    run: function() {
        VAR_1 = "test";
        VAR_2 = 123;
        var VAR_3 = {};
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3.VAR_5 = VAR_1;
          VAR_3.VAR_6 = VAR_2;
          delete VAR_3.VAR_5;
          delete VAR_3.VAR_6;
        }
    }
};