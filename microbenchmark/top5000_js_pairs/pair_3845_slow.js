const Benchmark = {
    run: function() {
        const VAR_1 = 5 + 1000 * 2;
        const FUNCTION_1 = (VAR_2, VAR_3) => {
          let VAR_4 = "";
          while (VAR_3--) {
            VAR_4 += VAR_2;
          }
          return VAR_4;
        };
        FUNCTION_1(" ", VAR_1);
    }
};