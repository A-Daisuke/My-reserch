const Benchmark = {
    run: function() {
        var VAR_1 = "123444";
        var VAR_2 = "1234567899999999999";
        function FUNCTION_1(VAR_3) {
          var VAR_4 = "";
          var VAR_6 = VAR_3.length;
          while (VAR_6 > 0) {
            var VAR_7 = VAR_3.substring(VAR_6 - 3, VAR_6);
            VAR_4 = VAR_7 + VAR_4;
            if (VAR_6 > 3) {
              VAR_4 = "," + VAR_4;
            }
            VAR_6 = VAR_6 - 3;
          }
          return VAR_4;
        }
        function FUNCTION_2(VAR_5) {
          return VAR_5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        FUNCTION_1(VAR_1);
        FUNCTION_1(VAR_2);
    }
};