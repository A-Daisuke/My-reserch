const Benchmark = {
    run: function() {
        var VAR_1 = [34, 56, 78, 45, 33];
        var VAR_2 = [34, 56, 78, 45, 33];
        function FUNCTION_1(VAR_3, VAR_4) {
          for (var VAR_5 = 0; VAR_5 < VAR_1.length; ++VAR_5) {
            if (VAR_1[VAR_5] != VAR_2[VAR_5]) {
              return false;
            }
          }
          return true;
        }
        for (var VAR_6 = 0; VAR_6 < 100000; ++VAR_6) {
          FUNCTION_1(VAR_1, VAR_2);
        }
    }
};