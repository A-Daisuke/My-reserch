const Benchmark = {
    run: function() {
        var VAR_1 = 5392;
        function FUNCTION_1(VAR_2, VAR_3, VAR_4) {
          var VAR_5 = "";
          if (VAR_2 < 0) {
            VAR_5 = "-";
            VAR_2 = -VAR_2;
          }
          VAR_2 = "" + VAR_2;
          while (VAR_2.length < VAR_3) VAR_2 = "0" + VAR_2;
          if (VAR_4) VAR_2 = VAR_2.substr(VAR_2.length - VAR_3);
          return VAR_5 + VAR_2;
        }
        FUNCTION_1(VAR_1, 150000);
    }
};