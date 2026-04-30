const Benchmark = {
    run: function() {
        const VAR_1 = Array(1000)
          .fill()
          .map((VAR_2, VAR_3) => VAR_3);
        const VAR_6 = [];
        VAR_1.forEach((VAR_5) => {
          if (VAR_5 % 2) {
            VAR_6.push(VAR_5);
          }
        });
    }
};