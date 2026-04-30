const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          try {
            return eval("obj." + VAR_2);
          } catch (VAR_3) {
            return null;
          }
        }
        var VAR_4 = { KEY_1: { KEY_2: [{ KEY_3: { KEY_4: 42 } }] } };
        var VAR_5 = FUNCTION_1(VAR_4, "a.b[0].c.d");
    }
};