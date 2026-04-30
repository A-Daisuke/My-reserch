const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_7 = VAR_1,
            VAR_8 = 0,
            VAR_9 = 0;
          do {
            VAR_8 = VAR_7 % 10;
            VAR_7 = (VAR_7 - VAR_8) / 10;
          } while (VAR_7 > 0);
          return VAR_8;
        }
        function FUNCTION_2(VAR_2) {
          return parseInt(VAR_7.toString().charAt(0), 10);
        }
        function FUNCTION_3(VAR_3) {
          return VAR_7.toString().charCodeAt(0) - 48;
        }
        var VAR_4 = Array.apply(null, new Array(10000)).map(function (VAR_5, VAR_6) {
          return VAR_6 * 100;
        });
        VAR_4.map(FUNCTION_1);
    }
};