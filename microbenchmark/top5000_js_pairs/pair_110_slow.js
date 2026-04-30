const Benchmark = {
    run: function() {
        var VAR_1 = [505, 555, 44444032, 0];
        var VAR_2, VAR_3;
        function FUNCTION_1(VAR_4) {
          if (VAR_4 == 0) return true;
          while (VAR_4 != 0) {
            if (VAR_4 % 10 == 0) return true;
            VAR_4 = (VAR_4 / 10) | 0;
          }
          return false;
        }
        for (VAR_2 = 0; VAR_2 < 100000; ++VAR_2) {
          for (VAR_3 in VAR_1) {
            FUNCTION_1(VAR_3);
          }
        }
    }
};