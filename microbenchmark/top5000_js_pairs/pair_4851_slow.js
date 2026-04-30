const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = "";
          for (var VAR_4 = VAR_1; VAR_4 > 0; --VAR_4)
            VAR_3 += VAR_2[Math.round(Math.random() * (VAR_2.VAR_1 - 1))];
          return VAR_3;
        }
        var VAR_5 = FUNCTION_1(
          100000,
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        );
        function FUNCTION_2(VAR_6) {
          var VAR_7 = "";
          for (var VAR_8 = 0, VAR_9 = VAR_5.VAR_1; VAR_8 < VAR_9; VAR_8 += VAR_6) {
            VAR_7 += VAR_5.charAt(VAR_8);
          }
          return VAR_7;
        }
        FUNCTION_2(3);
    }
};