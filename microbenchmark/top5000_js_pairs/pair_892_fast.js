const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push({ KEY_1: VAR_3 });
        }
        (function () {
          var VAR_4 = 0;
          var VAR_5 = VAR_1.length;
          var VAR_6;
          var VAR_7 = VAR_1.slice();
          for (VAR_3 = 0; VAR_3 < VAR_5; VAR_3++) {
            VAR_6 = VAR_7[VAR_3];
            if (VAR_6.KEY_1 % 2 === 0) {
              VAR_6.KEY_1 = VAR_6.KEY_1;
            } else {
              VAR_6.KEY_1 = 0;
            }
          }
        })();
    }
};