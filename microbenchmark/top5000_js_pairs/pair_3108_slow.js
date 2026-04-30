const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "default" };
        var VAR_2 = [];
        var VAR_3 = [];
        var FUNCTION_1 = function (VAR_4) {
          this.VAR_5 = VAR_4 ? VAR_4 : {};
        };
        function FUNCTION_2(VAR_6) {
          this.VAR_5 = VAR_4 ? VAR_4 : {};
        }
        for (var VAR_7 = 0, VAR_8 = 1000; VAR_7 < VAR_8; VAR_7++) {
          var VAR_9 = new FUNCTION_1(VAR_1);
          VAR_2.push(VAR_9);
        }
    }
};