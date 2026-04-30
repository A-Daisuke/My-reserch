const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1 ^= (VAR_1 & ~-~VAR_1) | (~VAR_1 & -~VAR_1)) {
          VAR_1;
        }
    }
};