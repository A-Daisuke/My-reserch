const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2.split(".").reduce(function (VAR_5, VAR_6) {
            return typeof VAR_5 == "undefined" || VAR_5 === null ? VAR_5 : VAR_5[VAR_6];
          }, VAR_1);
        }
        var VAR_4 = { KEY_1: { KEY_2: { KEY_3: "Hello!" } } };
        FUNCTION_1(VAR_4, "a.b.c");
    }
};