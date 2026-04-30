const Benchmark = {
    run: function() {
        var VAR_1 = 1000000;
        var VAR_2 = 10;
        do {
          VAR_1--;
        } while (VAR_1 - VAR_2);
    }
};