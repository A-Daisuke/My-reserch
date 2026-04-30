const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_3) {
          return;
        }
        function FUNCTION_1(VAR_1) {
          if (VAR_1 === "true") {
            return true;
          }
          if (VAR_1 === "false") {
            return false;
          }
          if (VAR_1 === "null") {
            return null;
          }
          if (isFinite(VAR_1)) {
            var VAR_6 = parseFloat(VAR_1);
            if (!isNaN(VAR_6)) {
              return VAR_6;
            }
          }
          return VAR_1;
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