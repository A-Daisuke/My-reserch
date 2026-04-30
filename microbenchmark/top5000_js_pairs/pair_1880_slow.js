const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 100000;
        var VAR_3 = 0;
        var VAR_4 = 0;
        for (VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push(~~(2147483647 * Math.random()));
        }
        for (VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          if (VAR_1[VAR_3] & (1 === 1)) {
            VAR_4++;
          }
        }
    }
};