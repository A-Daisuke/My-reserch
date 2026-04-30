const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
          };
          while (VAR_1) {
            var VAR_3 = VAR_1.toString();
            VAR_3.split("").forEach(function (VAR_4) {
              VAR_2[VAR_4]++;
            });
            VAR_1--;
          }
        }
        FUNCTION_1(200);
    }
};