const Benchmark = {
    run: function() {
        const VAR_1 = Array(9999).fill({ KEY_1: "foo" });
        function FUNCTION_1(VAR_2) {
          VAR_2.VAR_3 = "baz";
          return VAR_2;
        }
        VAR_1.map((VAR_4) => FUNCTION_1(VAR_4));
    }
};