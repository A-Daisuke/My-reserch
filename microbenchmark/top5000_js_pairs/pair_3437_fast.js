const Benchmark = {
    run: function() {
        var VAR_1 = 533332800000;
        function FUNCTION_1(VAR_3) {
          var VAR_4 = "",
            VAR_5 = 0;
          VAR_3 = (VAR_3 || 0).toString();
          for (var VAR_6 = VAR_3.length - 1; VAR_6 >= 0; VAR_6--) {
            VAR_5++;
            VAR_4 = VAR_3.charAt(VAR_6) + VAR_4;
            if (!(VAR_5 % 3) && VAR_6 != 0) {
              VAR_4 = "," + VAR_4;
            }
          }
          return VAR_4;
        }
        FUNCTION_1(VAR_1);
    }
};