const Benchmark = {
    run: function() {
        var VAR_1 = "123444";
        var VAR_2 = "1234567899999999999";
        function FUNCTION_1(VAR_3) {
          VAR_3 = VAR_3.toString();
          var VAR_4 = /(-?\d+)(\d{3})/;
          while (VAR_4.test(VAR_3)) VAR_3 = VAR_3.replace(VAR_4, "$1,$2");
          return VAR_3;
        }
        function FUNCTION_2(VAR_5) {
          return VAR_3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        FUNCTION_1(VAR_1);
        FUNCTION_1(VAR_2);
    }
};