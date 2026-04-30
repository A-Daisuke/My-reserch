const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "default" };
        var VAR_2 = [];
        var FUNCTION_2 = function (VAR_9) {
          this.VAR_5 = VAR_9 ? VAR_9 : {};
        };
        var VAR_10 = new FUNCTION_2(VAR_1);
    }
};