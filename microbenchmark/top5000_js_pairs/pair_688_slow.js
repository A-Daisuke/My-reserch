const Benchmark = {
    run: function() {
        const FUNCTION_1 =
          (VAR_1) =>
          (...VAR_2) => {
            let VAR_3 = VAR_1(...VAR_2);
            while (typeof VAR_3 === "function") {
              VAR_3 = VAR_3();
            }
            return VAR_3;
          };
        const FUNCTION_2 = (VAR_4, VAR_5 = 0) =>
          VAR_4 === 0 ? VAR_5 : () => FUNCTION_2(VAR_4 - 1, VAR_5 + VAR_4);
        const VAR_6 = FUNCTION_1(FUNCTION_2);
        const FUNCTION_3 = (VAR_7, VAR_8 = 0) =>
          VAR_7 === 0 ? VAR_8 : FUNCTION_3(VAR_7 - 1, VAR_8 + VAR_7);
        VAR_6(100000);
    }
};