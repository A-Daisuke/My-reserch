const Benchmark = {
    run: function() {
        const VAR_1 = 100000;
        const VAR_2 = [];
        function FUNCTION_2(...VAR_3) {
          if (VAR_3.length === 0) {
            return (VAR_7) => VAR_7;
          }
          if (VAR_3.length === 1) {
            return VAR_3[0];
          }
          return VAR_3.reduce(
            (VAR_4, VAR_5) =>
              (...VAR_6) =>
                VAR_4(VAR_5(...VAR_6)),
          );
        }
        const VAR_8 = FUNCTION_2(parseInt, Math.exp, Math.log);
        for (let VAR_9 = 0; VAR_9 < VAR_1; VAR_9++) VAR_2.push(VAR_8(VAR_9));
    }
};