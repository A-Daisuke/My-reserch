const Benchmark = {
    run: function() {
        var VAR_1 = "abcde";
        var VAR_2 = 1000;
        const FUNCTION_2 = (VAR_7, VAR_8) => Array.from({ KEY_1: VAR_2 }, () => VAR_7).join("");
        VAR_1.repeat(VAR_2);
    }
};