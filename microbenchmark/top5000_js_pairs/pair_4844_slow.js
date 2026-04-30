const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "",
            VAR_3 = VAR_1 == true ? /[^\A-Z]/g : /[^\a-z]/g;
          for (var VAR_4 = 32; VAR_4 < 127; ++VAR_4) {
            VAR_2 += String.fromCharCode(VAR_4);
          }
          return VAR_2.replace(VAR_3, "").split("");
        }
        FUNCTION_1(true);
        FUNCTION_1(false);
    }
};