const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 0,
          VAR_3 = 0;
        var VAR_4 = 10,
          VAR_5 = -1 >>> 0,
          VAR_6 = (Math.log(VAR_5 * VAR_4) / Math.log(2)) >> 0,
          VAR_7 = Math.ceil(VAR_6 / 2),
          VAR_8 = 1 << (VAR_6 >> 1),
          VAR_9 = (Math.pow(2, VAR_7) / VAR_4) >> 0;
        for (VAR_3 = 0; VAR_3 < VAR_8; VAR_3++) {
          VAR_1 = VAR_1 / 10;
          VAR_2 = (VAR_2 * VAR_9) >> VAR_7;
          if (VAR_1 !== VAR_2) throw new Error("Invalid value: " + VAR_3);
        }
    }
};