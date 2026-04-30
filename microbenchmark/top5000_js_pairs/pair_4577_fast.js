const Benchmark = {
    run: function() {
        var VAR_1 = 12345678901234567000;
        function FUNCTION_1(VAR_2) {
          if (VAR_2.length <= 3) {
            return VAR_2;
          }
          var VAR_5 = VAR_2.substr(VAR_2.length - 3);
          var VAR_6 = VAR_2.substr(0, VAR_2.length - 3);
          return FUNCTION_1(VAR_6) + "," + VAR_5;
        }
        var VAR_4 = FUNCTION_1(VAR_1 + "");
    }
};