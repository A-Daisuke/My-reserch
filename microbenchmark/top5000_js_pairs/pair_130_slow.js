const Benchmark = {
    run: function() {
        const VAR_1 = Array(100000)
          .fill(0)
          .map((VAR_2, VAR_3) => -50000 + VAR_3);
        const VAR_4 = Array(100000).fill(1000000);
        const VAR_5 = VAR_1;
        function FUNCTION_1(VAR_6) {
          const VAR_7 = [...new Set(VAR_6)];
          const VAR_8 = new Map();
          VAR_7.forEach((VAR_9) => VAR_8.set(VAR_9, VAR_9));
          let VAR_10 = 1;
          while (VAR_8.get(VAR_10)) {
            VAR_10++;
          }
          return VAR_10;
        }
        FUNCTION_1(VAR_5);
    }
};