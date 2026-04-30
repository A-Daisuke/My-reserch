const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (typeof VAR_1 !== "string" || (VAR_1[0] !== "{" && VAR_1[0] !== "[")) return VAR_1;
          try {
            return JSON.parse(VAR_1);
          } catch (VAR_2) {
            return VAR_1;
          }
        }
        FUNCTION_1('{"a": "3"}');
        FUNCTION_1("[1,2,3]");
        FUNCTION_1("error");
    }
};