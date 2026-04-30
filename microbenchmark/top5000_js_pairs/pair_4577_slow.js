const Benchmark = {
    run: function() {
        var VAR_1 = 12345678901234567000;
        function FUNCTION_1(VAR_2) {
          var VAR_3 = /(\d+)(\d{3})/;
          while (VAR_3.test(VAR_2)) {
            VAR_2 = VAR_2.replace(VAR_3, "$1" + "," + "$2");
          }
          return VAR_2;
        }
        var VAR_4 = FUNCTION_1(VAR_1 + "");
    }
};