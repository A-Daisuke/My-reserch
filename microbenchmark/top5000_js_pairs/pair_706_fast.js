const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3, VAR_4, VAR_5;
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3 += 1) {
          VAR_1.push([VAR_3, VAR_3 * 2, VAR_3 * 3]);
        }
        for (VAR_3 = 0; VAR_3 < 3; VAR_3 += 1) {
          VAR_5 = [];
          for (VAR_4 = 0; VAR_4 < 1000; VAR_4 += 1) {
            VAR_5.push(VAR_4 * VAR_3);
          }
          VAR_2.push(VAR_5);
        }
        var VAR_6 = [];
        VAR_1.forEach(function (VAR_7) {
          Array.prototype.push.apply(VAR_6, VAR_7);
        });
    }
};