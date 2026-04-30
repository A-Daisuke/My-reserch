const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 100000;
        for (; VAR_1 < VAR_2; VAR_1++) {
          VAR_1 = [VAR_1, VAR_1 + 1, VAR_1 + 2, VAR_1 + 3][VAR_1 % 4];
        }
    }
};