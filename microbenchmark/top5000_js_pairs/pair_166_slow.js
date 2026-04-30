const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          var VAR_4 = 0;
          for (var VAR_5 = VAR_2; VAR_5 < VAR_3; VAR_5++) {
            VAR_4 = VAR_4 + (VAR_5.toString().split(VAR_1).length - 1);
          }
          return VAR_4;
        }
        var VAR_6 = FUNCTION_1(7, 1, 100000);
    }
};