const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var FUNCTION_1 = function (VAR_3) {
          this.VAR_4 = VAR_3 ? VAR_3 : {};
        };
        function FUNCTION_2(VAR_5) {
          this.VAR_4 = VAR_3 ? VAR_3 : {};
        }
        for (var VAR_6 = 0, VAR_7 = 1000; VAR_6 < VAR_7; VAR_6++) {
          var VAR_8 = new FUNCTION_1();
          VAR_1.push(VAR_8);
        }
    }
};