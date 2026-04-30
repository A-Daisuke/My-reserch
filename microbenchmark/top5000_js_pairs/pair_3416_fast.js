const Benchmark = {
    run: function() {
        var VAR_1 = 533332800000;
        function FUNCTION_1(VAR_3) {
          var VAR_4 = (VAR_3 || 0).toString(),
            VAR_5 = /\d{3}$/,
            VAR_6 = "";
          while (VAR_5.test(VAR_3)) {
            VAR_6 = RegExp.lastMatch + VAR_6;
            if (VAR_3 !== RegExp.lastMatch) {
              VAR_6 = "," + VAR_6;
              VAR_3 = RegExp.leftContext;
            } else {
              VAR_3 = "";
              break;
            }
          }
          if (VAR_3) {
            VAR_6 = VAR_3 + VAR_6;
          }
          return VAR_6;
        }
        FUNCTION_1(VAR_1);
    }
};