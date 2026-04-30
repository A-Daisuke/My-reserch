const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          try {
            return JSON.parse(VAR_1);
          } catch (VAR_2) {
            return VAR_1;
          }
        }
        function FUNCTION_2(VAR_3) {
          return;
        }
        function FUNCTION_3(VAR_4) {
          return VAR_4;
        }
        VAR_5 = FUNCTION_1;
        VAR_5("null");
        VAR_5("true");
        VAR_5("false");
        VAR_5("1.0");
        VAR_5("NaN");
        VAR_5("sssss");
    }
};