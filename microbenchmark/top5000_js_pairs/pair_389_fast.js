const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        while (VAR_2 < 2000) {
          VAR_1.push(Math.round(Math.random() * 2000));
          VAR_2++;
        }
        var VAR_6 = VAR_1.sort(),
          VAR_3 = [],
          VAR_7 = 0,
          VAR_8 = -1;
        for (var VAR_9 = 0; VAR_9 < VAR_6.length; VAR_9++) {
          VAR_10 = VAR_6[VAR_9];
          if (
            VAR_9 !== VAR_8 &&
            VAR_10 === VAR_6[VAR_8] &&
            VAR_3[VAR_7 - 1] !== VAR_10
          ) {
            VAR_3[VAR_7++] = VAR_10;
          }
          VAR_8++;
        }
    }
};