const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_4 = "";
          do {
            if (VAR_2 & 1) {
              VAR_4 += VAR_1;
            }
            VAR_1 += VAR_1;
          } while ((VAR_2 = VAR_2 >> 1));
          return VAR_4;
        }
        function FUNCTION_2(VAR_3) {
          VAR_3;
        }
        FUNCTION_2(FUNCTION_1("Hello world!", 1000));
    }
};