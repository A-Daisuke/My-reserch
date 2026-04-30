const Benchmark = {
    run: function() {
        const VAR_1 = 5 + 1000 * 2;
        const FUNCTION_1 = (VAR_2, VAR_3) => {
          let VAR_4 = "";
          while (VAR_3) {
            if (VAR_3 % 2 === 1) VAR_4 += VAR_2;
            if (VAR_3 > 1) VAR_2 += VAR_2;
            VAR_3 >>= 1;
          }
          return VAR_4;
        };
        FUNCTION_1(" ", VAR_1);
    }
};