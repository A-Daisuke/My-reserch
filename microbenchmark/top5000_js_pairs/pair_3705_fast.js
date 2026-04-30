const Benchmark = {
    run: function() {
        const FUNCTION_1 = (VAR_1) =>
          Array(VAR_1)
            .fill()
            .map((VAR_2, VAR_3) => VAR_3);
        const VAR_4 = FUNCTION_1(1000);
        VAR_4.reduce((VAR_7, VAR_6) => {
          if ((VAR_6 * VAR_6) % 13 === 9) VAR_7.push(VAR_6 * VAR_6);
          return VAR_7;
        }, []);
    }
};