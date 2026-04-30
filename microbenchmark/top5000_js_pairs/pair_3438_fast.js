const Benchmark = {
    run: function() {
        var VAR_1 = 533332800000;
        function FUNCTION_1(VAR_3) {
          var VAR_4 = (VAR_3 || 0).toString(),
            VAR_5 = "";
          while (VAR_3.length > 3) {
            VAR_5 = "," + VAR_3.slice(-3) + VAR_5;
            VAR_3 = VAR_3.slice(0, VAR_3.length - 3);
          }
          if (VAR_3) {
            VAR_5 = VAR_3 + VAR_5;
          }
          return VAR_5;
        }
        FUNCTION_1(VAR_1);
    }
};