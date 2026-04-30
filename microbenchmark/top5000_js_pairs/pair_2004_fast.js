const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_5 = "";
          var VAR_6 = Array(VAR_1).join(" ");
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            var VAR_7 = Array(VAR_3 * 2 + 2).join("*");
            if (VAR_5 !== "") VAR_5 += "\n";
            VAR_5 += VAR_6 + VAR_7 + VAR_6;
            VAR_6 = VAR_6.slice(0, -1);
          }
          return VAR_5;
        }
        FUNCTION_1(100);
    }
};