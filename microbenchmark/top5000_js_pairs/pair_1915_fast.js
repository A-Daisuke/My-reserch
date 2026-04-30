const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(Array(10000).keys());
        const FUNCTION_1 = (VAR_2) => VAR_2 * VAR_2;
        const FUNCTION_2 = (VAR_3) => VAR_3 * VAR_3 * VAR_3;
        let VAR_8 = [];
        let VAR_9 = [];
        for (let VAR_10 = 0; VAR_10 < VAR_1.length; VAR_10++) {
          let VAR_11 = VAR_1[VAR_10];
          VAR_8.push(FUNCTION_1(VAR_11));
          VAR_9.push(FUNCTION_2(VAR_11));
        }
    }
};