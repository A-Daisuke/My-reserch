const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_7 = 0,
          VAR_2 = 0;
        var VAR_3 = 10,
          VAR_4 = -1 >>> 0,
          VAR_5 = (Math.log(VAR_4 * VAR_3) / Math.log(2)) >> 0,
          VAR_8 = Math.ceil(VAR_5 / 2),
          VAR_6 = 1 << (VAR_5 >> 1),
          VAR_9 = (Math.pow(2, VAR_8) / VAR_3) >> 0;
        for (VAR_2 = 0; VAR_2 < VAR_6; VAR_2++) {
          VAR_1 = VAR_1 / 10;
          VAR_7 = (VAR_7 * VAR_9) >> VAR_8;
          if (VAR_1 !== VAR_7) throw new Error("Invalid value: " + VAR_2);
        }
    }
};