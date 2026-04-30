const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_5 = [];
          for (var VAR_4 = 65; VAR_4 < 90; ++VAR_4) {
            VAR_5.push(String.fromCharCode(VAR_4));
          }
          if (VAR_1 == true) {
            return VAR_5;
          }
          return VAR_5.map(function (VAR_6) {
            return VAR_6.toLocaleLowerCase();
          });
        }
        FUNCTION_1(true);
        FUNCTION_1(false);
    }
};