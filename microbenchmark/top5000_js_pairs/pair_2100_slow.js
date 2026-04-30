const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100);
        VAR_1[50] = 50;
        VAR_1[0] = 30;
        function FUNCTION_1(VAR_2) {
          if (VAR_2) {
            return VAR_1[50];
          } else {
            return VAR_1[0];
          }
        }
        var VAR_3 = true;
        for (var VAR_4 = 0; VAR_4 < 300000; ++VAR_4) {
          VAR_3 = !VAR_3;
          var VAR_5;
          if (VAR_3) {
            VAR_5 = VAR_1[50];
          } else {
            VAR_5 = VAR_1[0];
          }
        }
    }
};