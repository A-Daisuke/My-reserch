const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var FUNCTION_1 = function (VAR_2) {
          var VAR_3 = 4;
          var VAR_4 = Math.pow(10, VAR_3);
          for (var VAR_5 = 0; VAR_5 < VAR_1; VAR_5++) {
            var VAR_6 =
              ((Math.random() * VAR_4) >> 0) +
              "_" +
              ((Math.random() * VAR_4) >> 0) +
              "_" +
              ((Math.random() * VAR_4) >> 0);
          }
          return VAR_6;
        };
        FUNCTION_1(VAR_1);
    }
};