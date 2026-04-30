const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: [{ KEY_4: "blah" }] } } };
        var VAR_2 = {};
        var VAR_3, VAR_4;
        function FUNCTION_1(VAR_6, VAR_7, VAR_8) {
          var VAR_9 = VAR_7.split(".");
          var VAR_10 = 0;
          var VAR_11 = VAR_9.length;
          while (VAR_6 && VAR_10 < VAR_11) {
            VAR_6 = VAR_6[VAR_9[VAR_10]];
            VAR_10++;
          }
          return VAR_6 === undefined ? VAR_8 : VAR_6;
        }
        VAR_3 = FUNCTION_1(VAR_2, "install.gentoo.harhar.0.text", "whatever some text");
    }
};