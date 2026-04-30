const Benchmark = {
    run: function() {
        let VAR_1 = Array(10)
          .fill()
          .map((VAR_2) =>
            Array(10)
              .fill()
              .map((VAR_3) => Array(10).fill(-1)),
          );
    }
};