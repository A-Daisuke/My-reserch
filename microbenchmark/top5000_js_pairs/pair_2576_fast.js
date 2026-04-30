const Benchmark = {
    run: function() {
        var VAR_4 = [];
        (function () {
          var VAR_5;
          for (VAR_5 = 0; VAR_5 < 100; VAR_5 += 1) {
            VAR_4.push(VAR_5);
          }
        })();
        var VAR_3,
          VAR_9,
          VAR_10,
          VAR_11,
          VAR_6 = [];
        for (VAR_5 = 0; VAR_5 < VAR_4.length; VAR_5 += 1) {
          VAR_10 = VAR_5;
          for (VAR_9 = 0; VAR_9 < VAR_4.length; VAR_9 += 1) {
            VAR_11 = VAR_9;
            VAR_6.push({
              KEY_1: VAR_10,
              KEY_2: VAR_11,
            });
          }
        }
        console.log(VAR_6);
    }
};