const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, Array(10000)).map(function () {
          return Math.floor(10000 * Math.random());
        });
        function FUNCTION_1(VAR_2) {
          return VAR_2
            .filter(function (VAR_3, VAR_4, VAR_5) {
              return VAR_2.indexOf(VAR_3) === VAR_4;
            })
            .sort(function (VAR_6, VAR_7) {
              return VAR_6 - VAR_7;
            });
        }
        FUNCTION_1(VAR_1);
    }
};