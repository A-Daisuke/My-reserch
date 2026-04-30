const Benchmark = {
    run: function() {
        var VAR_5 = (function () {
          var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          return function (VAR_6) {
            return VAR_1[VAR_6];
          };
        })();
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          for (var VAR_4 = 0; VAR_4 < 10; VAR_4++) {
            var VAR_2 = VAR_5(VAR_4);
          }
        }
    }
};