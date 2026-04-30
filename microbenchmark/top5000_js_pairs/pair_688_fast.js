const Benchmark = {
    run: function() {
        const FUNCTION_4 = (VAR_9) => {
          let VAR_10 = 0;
          for (let VAR_11 = 0; VAR_11 <= VAR_9; VAR_11++) {
            VAR_10 += VAR_11;
          }
          return VAR_10;
        };
        const FUNCTION_3 = (VAR_7, VAR_8 = 0) =>
          VAR_7 === 0 ? VAR_8 : FUNCTION_3(VAR_7 - 1, VAR_8 + VAR_7);
        FUNCTION_4(100000);
    }
};