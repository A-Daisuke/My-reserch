const Benchmark = {
    run: function() {
        var VAR_1 = "1" + new Array(100000).join("0");
        function FUNCTION_1(VAR_2) {
          var VAR_3 = "";
          var VAR_4 = 0;
          for (var VAR_5 = VAR_2.length - 1; VAR_5 >= 0; VAR_5--) {
            if (VAR_5 % 3 == 0 && VAR_5 != 0) {
              VAR_3 += VAR_2[VAR_4] + ",";
            } else {
              VAR_3 += VAR_2[VAR_4];
            }
            VAR_4++;
          }
          return VAR_3;
        }
        FUNCTION_1(VAR_1);
    }
};