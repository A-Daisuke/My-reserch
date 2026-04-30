const Benchmark = {
    run: function() {
        const FUNCTION_2 = (VAR_6, VAR_7) => {
          const VAR_8 = [];
          for (let VAR_9 = VAR_6; VAR_9 <= VAR_7; VAR_9 += 1) {
            VAR_8.push(VAR_9);
          }
          return VAR_8;
        };
        const VAR_10 = 0;
        const VAR_11 = 5000;
        FUNCTION_2(VAR_10, VAR_11);
    }
};