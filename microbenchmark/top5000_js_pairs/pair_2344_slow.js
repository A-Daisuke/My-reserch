const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [300, 625, 950];
          return VAR_2.sort(function (VAR_3, VAR_4) {
            return Math.abs(VAR_1 - VAR_3) - Math.abs(VAR_1 - VAR_4);
          })[0];
        }
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          FUNCTION_1(VAR_5);
        }
    }
};