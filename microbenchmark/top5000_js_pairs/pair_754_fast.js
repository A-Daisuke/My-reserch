const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = 0;
        for (; VAR_2 < 1000; VAR_2++) {
          VAR_1["key" + VAR_2] = true;
        }
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          delete VAR_1["key" + VAR_2];
        }
        for (; VAR_2 < 20000; VAR_2++) {
          VAR_1["key" + VAR_2] = true;
        }
    }
};