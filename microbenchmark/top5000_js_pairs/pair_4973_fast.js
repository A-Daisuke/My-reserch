const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_3) {
          for (
            VAR_4 = VAR_3.split("."), VAR_5 = VAR_1, VAR_6 = 0, VAR_7 = VAR_4.length;
            VAR_5 && VAR_5.hasOwnProperty(VAR_4[VAR_6]);
            VAR_8 = VAR_5[VAR_4[VAR_6++]]
          );
          return VAR_6 == VAR_7;
        }
        var VAR_9 = { KEY_1: { KEY_2: { KEY_3: null } } };
        FUNCTION_1(VAR_9, "e.b.c.d");
    }
};