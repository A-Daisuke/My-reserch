const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var FUNCTION_2 = function () {};
          FUNCTION_2.VAR_2 = VAR_1;
          return new FUNCTION_2();
        }
        var VAR_3 = { KEY_1: "base" };
        var VAR_4 = FUNCTION_1(VAR_3);
        VAR_4.KEY_1 = "first";
        var VAR_5 = FUNCTION_1(VAR_3);
        VAR_5.KEY_1 = "second";
        if (VAR_4.KEY_1 != "first" || VAR_5.KEY_1 != "second") {
          throw "invalid";
        }
    }
};