const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = VAR_1.VAR_2,
            VAR_4 = VAR_1.substr(0, VAR_2 - 1),
            VAR_5 = VAR_1.charAt(VAR_2 - 1);
          if (VAR_5 === "0") {
            return FUNCTION_1(VAR_4) + "9";
          } else {
            return VAR_4 + (VAR_5 - 1);
            x;
          }
        }
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          FUNCTION_1(VAR_3 + "");
        }
    }
};