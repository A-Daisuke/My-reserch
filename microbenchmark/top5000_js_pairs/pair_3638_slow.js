const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: [{ KEY_4: "blah" }] } } };
        var VAR_2 = {};
        var VAR_3, VAR_4;
        function FUNCTION_1(VAR_5, VAR_6, VAR_7) {
          var VAR_8 = VAR_6.split(".");
          var VAR_9 = 0;
          var VAR_10 = VAR_8.length;
          while (VAR_5 && VAR_9 < VAR_10) {
            VAR_5 = VAR_5[VAR_8[VAR_9]];
            VAR_9++;
          }
          return VAR_5 === undefined ? VAR_7 : VAR_5;
        }
        try {
          VAR_3 = VAR_2.KEY_1.KEY_2.KEY_3[0].KEY_4;
        } catch (VAR_11) {
          VAR_3 = "whatever some text";
        }
    }
};