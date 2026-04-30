const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = "AAAAAAAAAAAAAAAAAAAA";
        }
        var FUNCTION_2 = function () {
          this.VAR_1 = "AAAAAAAAAAAAAAAAAAAA";
        };
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_2.push(new FUNCTION_2());
        }
    }
};