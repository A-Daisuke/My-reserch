const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(0);
        const FUNCTION_1 = (VAR_2) => VAR_2 + 1;
        function FUNCTION_2(VAR_3, VAR_4) {
          const VAR_5 = VAR_4 == null ? 0 : VAR_4.VAR_5;
          const VAR_6 = new Array(VAR_5);
          let VAR_7 = 0;
          while (VAR_7 < VAR_5) {
            VAR_6[VAR_8] = VAR_3(VAR_4[VAR_7]);
            VAR_7 += 1;
          }
          return VAR_6;
        }
        FUNCTION_2(FUNCTION_1, VAR_1);
    }
};