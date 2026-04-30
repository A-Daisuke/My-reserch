const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          let VAR_2 = "(function add" + VAR_1 + "(x) { return 0";
          for (let VAR_3 = 0; VAR_3 < VAR_1; ++VAR_3) {
            VAR_2 += "+x";
          }
          VAR_2 += "; })";
          return eval(VAR_2);
        }
        const VAR_4 = FUNCTION_1(5 * 1000);
        VAR_4(10);
    }
};