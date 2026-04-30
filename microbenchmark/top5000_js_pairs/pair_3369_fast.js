const Benchmark = {
    run: function() {
        var VAR_1 = "string";
        var VAR_2 = {
          KEY_1: 12,
          KEY_2: 3,
        };
        function FUNCTION_1(VAR_3) {
          if (!VAR_3) throw new Error("Failed");
        }
        for (var VAR_5 = 2000; VAR_5--; ) {
          FUNCTION_1(typeof VAR_2 === "object");
          FUNCTION_1(typeof VAR_1 === "string");
        }
    }
};