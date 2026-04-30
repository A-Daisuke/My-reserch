const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        function FUNCTION_1() {
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < 99999; VAR_3++) {
            try {
              var VAR_4 = VAR_1[VAR_3];
              VAR_2 = VAR_2 + 1;
            } catch (VAR_5) {
              break;
            }
          }
          return VAR_2;
        }
        FUNCTION_1();
    }
};