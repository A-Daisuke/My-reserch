const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, Array(10000)).map(function () {
          return Math.floor(10000 * Math.random());
        });
        function FUNCTION_1(VAR_2) {
          return VAR_2.sort().filter(function (VAR_6, VAR_7) {
            return VAR_6 !== VAR_2[VAR_7 + 1];
          });
        }
        FUNCTION_1(VAR_1);
    }
};