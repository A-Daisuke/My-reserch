const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = new Date(VAR_1, VAR_2, 0);
          return VAR_3.getDate();
        }
        for (var VAR_4 = 1; VAR_4 <= 2000; VAR_4++) {
          for (var VAR_5 = 1; VAR_5 <= 12; VAR_5++) {
            var VAR_6 = FUNCTION_1(VAR_4, VAR_5);
          }
        }
    }
};