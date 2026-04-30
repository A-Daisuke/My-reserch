const Benchmark = {
    run: function() {
        var VAR_1 = " string",
          VAR_6 = "",
          VAR_3 = 5000,
          VAR_4 = 0;
        for (; VAR_4 < VAR_3; VAR_4 += 1) {
          VAR_6 += VAR_1;
        }
    }
};