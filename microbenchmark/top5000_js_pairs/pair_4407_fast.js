const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "This is a resolved label" };
        function FUNCTION_1(VAR_2) {
          return VAR_1[VAR_2];
        }
        FUNCTION_1("SomeLabel");
    }
};