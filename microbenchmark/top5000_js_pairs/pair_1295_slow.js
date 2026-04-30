const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push({ KEY_1: VAR_3 });
        }
        (function () {
          var VAR_4 = 0;
          var VAR_5 = VAR_1.length;
          var VAR_6;
          for (VAR_3 = 0; VAR_3 < VAR_5; VAR_3++) {
            VAR_6 = VAR_1[VAR_3].KEY_1;
            if (VAR_6 % 2 === 0) {
              VAR_2.push(VAR_6);
            } else {
              VAR_2.push(0);
            }
          }
        })();
    }
};