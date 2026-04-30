const Benchmark = {
    run: function() {
        var VAR_2 = 0;
        while (VAR_2 < 1000000) {
          VAR_2 / 2;
          VAR_2++;
        }
    }
};