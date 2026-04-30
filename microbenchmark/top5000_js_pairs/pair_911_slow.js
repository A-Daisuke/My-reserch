const Benchmark = {
    run: function() {
        const VAR_1 = 100000;
        const VAR_2 = [];
        const FUNCTION_1 = (...VAR_3) =>
          VAR_3.reduce(
            (VAR_4, VAR_5) =>
              (...VAR_6) =>
                VAR_4(VAR_5(...VAR_6)),
            (VAR_7) => VAR_7,
          );
        const VAR_8 = FUNCTION_1(parseInt, Math.exp, Math.log);
        for (let VAR_9 = 0; VAR_9 < VAR_1; VAR_9++) VAR_2.push(VAR_8(VAR_9));
    }
};