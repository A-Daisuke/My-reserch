const Benchmark = {
    run: function() {
        const VAR_1 = 10000;
        let VAR_2 = Array(VAR_1)
          .fill(1)
          .map((VAR_3, VAR_4) => VAR_4);
        function FUNCTION_1(VAR_5) {
          return VAR_1 ** 2;
        }
        const VAR_6 = VAR_2.map(FUNCTION_1);
    }
};