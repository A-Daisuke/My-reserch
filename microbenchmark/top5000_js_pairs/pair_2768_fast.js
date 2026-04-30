const Benchmark = {
    run: function() {
        const VAR_1 = new Map();
        const VAR_2 = 1e-11;
        function FUNCTION_1(VAR_3) {
          const VAR_4 = Math.floor(VAR_3);
          let VAR_5 = VAR_2;
          if (!VAR_1.has(VAR_4)) {
            VAR_1.set(VAR_4, VAR_5);
          } else {
            VAR_5 += VAR_1.get(VAR_4);
          }
          return VAR_5;
        }
        for (let VAR_6 = -1000; VAR_6 < 1000; VAR_6++) {
          FUNCTION_1(VAR_6);
          FUNCTION_1(VAR_6 + 0.1);
          FUNCTION_1(VAR_6 - 0.1);
        }
    }
};