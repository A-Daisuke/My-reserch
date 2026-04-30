const Benchmark = {
    run: function() {
        var VAR_1 = Function.prototype.bind.bind(Function.prototype.call);
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; ++VAR_3) {
          VAR_2.push(VAR_3);
        }
        function FUNCTION_1() {
          var VAR_4 = +this;
        }
        VAR_2.forEach(function (VAR_5) {
          FUNCTION_1(VAR_5);
        });
    }
};