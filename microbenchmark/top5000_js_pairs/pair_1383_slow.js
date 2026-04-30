const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 0;
        var VAR_3 = 10,
          VAR_4 = -1 >>> 0,
          VAR_5 = (Math.log(VAR_4 * VAR_3) / Math.log(2)) >> 0,
          VAR_6 = 1 << (VAR_5 >> 1);
        for (VAR_2 = 0; VAR_2 < VAR_6; VAR_2++) {
          VAR_1 = VAR_1 / VAR_3;
        }
    }
};