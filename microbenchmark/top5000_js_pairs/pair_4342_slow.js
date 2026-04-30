const Benchmark = {
    run: function() {
        var VAR_1 = (function () {
          var VAR_2 = 1000,
            VAR_3 = [];
          while (VAR_2) {
            VAR_3.push(VAR_2);
            VAR_2--;
          }
          return VAR_3;
        })();
        function FUNCTION_1(VAR_4, VAR_5) {
          return VAR_4 + VAR_5;
        }
        VAR_1.reduce(function (VAR_6, VAR_7) {
          return VAR_6 + VAR_7;
        }, 0);
    }
};