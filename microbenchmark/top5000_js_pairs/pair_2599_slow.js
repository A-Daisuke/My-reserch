const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = "";
          while (true) {
            if (VAR_2 & 1) {
              VAR_3 += VAR_1;
            }
            VAR_2 >>= 1;
            if (VAR_2) {
              VAR_1 += VAR_1;
            } else {
              break;
            }
          }
          return VAR_3;
        }
        function FUNCTION_2(VAR_4, VAR_5) {
          VAR_5 = parseInt((VAR_5 === true ? 1 : VAR_5) + "", 10);
          return typeof VAR_4 == "string" && VAR_5 >= 1
            ? new Array(VAR_5 + 1).join(VAR_4)
            : null;
        }
        FUNCTION_2("-=", 10000);
    }
};