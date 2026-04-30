const Benchmark = {
    run: function() {
        (VAR_1 = 10000000), (VAR_2 = 0);
        while (VAR_2 != VAR_1) {
          VAR_2++;
        }
    }
};