const Benchmark = {
    run: function() {
        var VAR_1 = "The quick brown fox jumps over the lazy dog.";
        var VAR_2 = 1000;
        function FUNCTION_1(VAR_3, VAR_4) {
          if (VAR_4 == 0) {
            return "";
          } else if (VAR_4 == 1) {
            return VAR_3;
          } else if (VAR_4 % 2) {
            var VAR_7 = FUNCTION_1(VAR_3, (VAR_4 - 1) / 2);
            return VAR_7 + VAR_7 + VAR_3;
          } else {
            var VAR_8 = FUNCTION_1(VAR_3, VAR_4 / 2);
            return VAR_7 + VAR_7;
          }
        }
        FUNCTION_1(VAR_1, VAR_2);
    }
};