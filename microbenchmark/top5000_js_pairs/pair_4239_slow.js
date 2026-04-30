const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: "value" } };
        function FUNCTION_1(VAR_2, VAR_3) {
          try {
            return new Function("root", "return root." + VAR_3 + ";")(VAR_2);
          } catch (VAR_4) {}
        }
        FUNCTION_1(VAR_1, "level1.key");
    }
};