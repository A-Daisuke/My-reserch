const Benchmark = {
    run: function() {
        FUNCTION_1 = (VAR_1, VAR_2, VAR_3) => {
          while ((VAR_1 + "").length < VAR_2) VAR_1 = (VAR_3 || "0") + VAR_1;
          return VAR_1;
        };
        FUNCTION_2 = (VAR_4, VAR_5, VAR_6) =>
          (Number.MAX_VALUE.toString(2).replace(/./g, VAR_6 || "0") + VAR_4).substr(VAR_5 * -1);
        FUNCTION_1(100, 5);
    }
};