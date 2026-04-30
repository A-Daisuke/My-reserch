const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (!VAR_1 || !VAR_2 || !VAR_2.length) {
            return null;
          } else {
            var VAR_6 = VAR_1,
              VAR_7;
            for (VAR_7 = 0; VAR_7 < VAR_2.length; VAR_7 += 1) {
              if (!(VAR_6 = VAR_6[VAR_2[VAR_7]])) {
                break;
              }
            }
            return VAR_6 || null;
          }
        }
        var VAR_4 = { KEY_1: { KEY_2: [{ KEY_3: { KEY_4: 42 } }] } };
        var VAR_5 = FUNCTION_1(VAR_4, ["a", "b", 0, "c", "d"]);
    }
};