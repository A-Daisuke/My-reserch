const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(new Array(100000)).map((VAR_2, VAR_3) => VAR_3);
        const FUNCTION_1 = (VAR_6, VAR_7) => {
          if (VAR_7 > VAR_6) return VAR_7;
          return VAR_6;
        };
        VAR_1.reduce((VAR_4, VAR_5) => FUNCTION_1(VAR_4, VAR_5), 0);
    }
};