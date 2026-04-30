const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_3 = Math.floor(VAR_1.VAR_3 / 2);
          for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
            if (VAR_1[VAR_4] !== VAR_1[VAR_3 - VAR_4]) {
              return false;
            }
          }
          return true;
        }
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          FUNCTION_1("kajak");
        }
    }
};