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
        const VAR_5 = FUNCTION_1(10);
        let VAR_6 = 0;
        for (let VAR_7 = 0; VAR_7 < 5 * 1000; ++VAR_7) {
          VAR_6 += VAR_5(VAR_7);
        }
    }
};