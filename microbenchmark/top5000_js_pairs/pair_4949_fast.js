const Benchmark = {
    run: function() {
        var FUNCTION_3 = function (VAR_6) {
          this.VAR_7 = VAR_6;
        };
        var VAR_8 = new FUNCTION_3("first");
        var VAR_9 = new FUNCTION_3("second");
        if (VAR_8.VAR_7 != "first" || VAR_9.VAR_7 != "second") {
          throw "invalid";
        }
    }
};