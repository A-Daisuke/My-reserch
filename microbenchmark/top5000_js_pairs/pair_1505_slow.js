const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 100000; VAR_1++) {
          FUNCTION_1(VAR_1);
        }
        function FUNCTION_1(VAR_2) {
          var VAR_3 = 0;
          var VAR_4 = Math.floor(Math.random() * 16);
          if (VAR_4 != 0) {
            VAR_5 = VAR_4 - VAR_1;
          }
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            continue;
          }
        }
    }
};