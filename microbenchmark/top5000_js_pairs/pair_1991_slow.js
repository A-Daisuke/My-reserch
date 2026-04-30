const Benchmark = {
    run: function() {
        const VAR_1 = Array(9999).fill({ KEY_1: "foo" });
        function FUNCTION_1(VAR_2) {
          VAR_2.VAR_3 = "baz";
        }
        for (key in VAR_1) {
          FUNCTION_1(VAR_1[key]);
        }
    }
};