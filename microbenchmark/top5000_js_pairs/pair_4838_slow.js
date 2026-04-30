const Benchmark = {
    run: function() {
        var VAR_1 = "true",
          VAR_2 = "false",
          VAR_3 = "TRUE",
          VAR_4 = "FALSE",
          VAR_5 = "aisdj",
          VAR_6 = Array(300).join("s");
        function FUNCTION_1(VAR_7) {
          return VAR_7 && VAR_7.toLowerCase() === "true";
        }
        FUNCTION_1(VAR_6);
    }
};