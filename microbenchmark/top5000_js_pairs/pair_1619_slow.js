const Benchmark = {
    run: function() {
        const VAR_1 = Array(1000)
          .fill()
          .map((VAR_2, VAR_3) => VAR_3);
        VAR_1.reduce((VAR_4, VAR_5) => {
          if (VAR_5 % 2) {
            return [...VAR_4, VAR_5];
          }
          return VAR_4;
        }, []);
    }
};