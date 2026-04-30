const Benchmark = {
    run: function() {
        var VAR_1 = "abcde";
        var VAR_2 = 1000;
        const FUNCTION_1 = (VAR_3, VAR_4) => {
          for (var VAR_5 = "", VAR_6 = 0; VAR_6 < VAR_2; VAR_6++) VAR_5 += VAR_3;
          return VAR_5;
        };
        const FUNCTION_2 = (VAR_7, VAR_8) => Array.from({ KEY_1: VAR_2 }, () => VAR_7).join("");
        FUNCTION_1(VAR_1, VAR_2);
    }
};