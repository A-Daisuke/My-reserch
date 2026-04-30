const Benchmark = {
    run: function() {
        const VAR_1 = Array(9999).fill({ KEY_1: "foo" });
        function FUNCTION_1(VAR_2) {
          VAR_2.VAR_3 = "baz";
        }
        VAR_1.forEach((VAR_4) => FUNCTION_1(VAR_4));
    }
};