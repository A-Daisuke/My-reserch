const Benchmark = {
    run: function() {
        var VAR_9 = { KEY_1: "default" };
        var VAR_2 = [];
        var FUNCTION_1 = function (VAR_3) {
          this.VAR_4 = VAR_3 ? VAR_3 : {};
        };
        function FUNCTION_2(VAR_5) {
          this.VAR_4 = VAR_3 ? VAR_3 : {};
        }
        var VAR_10 = new FUNCTION_1(VAR_9);
    }
};