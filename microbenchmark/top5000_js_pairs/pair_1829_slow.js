const Benchmark = {
    run: function() {
        var VAR_1 = 1000000;
        while (VAR_1 ^ -1) {
          --VAR_1;
        }
    }
};