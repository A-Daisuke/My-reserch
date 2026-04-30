const Benchmark = {
    run: function() {
        var VAR_1 = Math.floor,
          VAR_2 = [
            0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0,
            1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1,
            2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,
          ];
        var VAR_3,
          VAR_4,
          VAR_5,
          VAR_6 = {};
        for (VAR_3 = 0; VAR_3 < 4; VAR_3 += 1) {
          for (VAR_4 = 0; VAR_4 < 4; VAR_4 += 1) {
            for (VAR_5 = 0; VAR_5 < 4; VAR_5 += 1) {
              VAR_6[VAR_3 + "," + VAR_4 + "," + VAR_5] = VAR_2[16 * VAR_3 + 4 * VAR_4 + VAR_5];
            }
          }
        }
    }
};