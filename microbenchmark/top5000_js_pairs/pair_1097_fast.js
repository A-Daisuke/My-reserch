const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          VAR_1 = (VAR_1 + "").toString();
          return encodeURIComponent(VAR_1)
            .replace(/!/g, "%21")
            .replace(/'/g, "%27")
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29")
            .replace(/\*/g, "%2A");
        }
        function FUNCTION_2(VAR_3, VAR_4, VAR_5) {
          while (VAR_5--) {
            VAR_3(VAR_4);
          }
        }
        FUNCTION_2(FUNCTION_1, "!'()*", 100);
    }
};