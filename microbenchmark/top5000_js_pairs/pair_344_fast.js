const Benchmark = {
    run: function() {
        var VAR_1 = 1000 * 1000;
        var VAR_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var VAR_3 = VAR_2.length,
          VAR_4 = VAR_1 - VAR_3;
        for (var VAR_8 = VAR_4; VAR_8--; ) {
          VAR_2.push(0);
        }
    }
};