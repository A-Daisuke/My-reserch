const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 > 0) {
            VAR_2 = VAR_2 - 1;
            VAR_3(VAR_2);
            FUNCTION_1(VAR_2, VAR_3);
          } else {
            return false;
          }
        }
        FUNCTION_1(VAR_1, function () {});
    }
};