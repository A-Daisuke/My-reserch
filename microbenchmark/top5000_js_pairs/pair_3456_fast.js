const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          while (VAR_1) {
            for (var VAR_3 = VAR_1.toString().length; VAR_3 > 0; VAR_3--) {
              var VAR_5 = Math.floor((VAR_1 / Math.pow(10, VAR_3 - 1)) % 10);
              VAR_2[VAR_5]++;
            }
            VAR_1--;
          }
        }
        FUNCTION_1(200);
    }
};