const Benchmark = {
    run: function() {
        var VAR_1 = "asdf";
        var VAR_2 = 1000;
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_5 = "";
          var VAR_6 = VAR_3 + " ";
          for (var VAR_7 = 0; VAR_7 < VAR_4; VAR_7++) {
            VAR_5 = VAR_5 + VAR_6;
          }
          return VAR_5;
        }
        FUNCTION_1(VAR_1, VAR_2);
    }
};